import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Maximize2,
  Minimize2,
  RotateCw,
  Sun,
  Layers,
  Box,
  Eye,
  Ruler,
  Compass,
  Play,
  Pause,
  RefreshCw,
} from 'lucide-react';

interface Project3DViewerProps {
  projectTitle?: string;
  projectCategory?: string;
  dimensions?: {
    width?: string;
    depth?: string;
    height?: string;
    ceiling?: string;
    cantilever?: string;
  };
}

export function Project3DViewer({
  projectTitle = 'Harborne Contemporary Residence',
  projectCategory = 'Residential Transformation',
  dimensions = {
    width: '14.80m',
    depth: '11.40m',
    height: '6.40m',
    ceiling: '3.10m',
    cantilever: '2.50m',
  },
}: Project3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const [showDimensions, setShowDimensions] = useState(true);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isSunAnimating, setIsSunAnimating] = useState(false);
  const [activeCameraView, setActiveCameraView] = useState<'iso' | 'front' | 'side' | 'top'>('iso');
  const [timeOfDay, setTimeOfDay] = useState<number>(13); // 13:00 / 1 PM
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  // References to three.js scene objects to mutate smoothly
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const explodedGroupRef = useRef<{
    groundFloor: THREE.Group;
    firstFloor: THREE.Group;
    roof: THREE.Group;
    dimensionsGroup: THREE.Group;
  } | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Interaction controls tracking
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraTargetRef = useRef(new THREE.Vector3(0, 1.5, 0));
  const sphericalRef = useRef({ radius: 14, theta: Math.PI / 4, phi: Math.PI / 3 });
  const targetExplodeProgressRef = useRef(0);
  const currentExplodeProgressRef = useRef(0);
  const isAutoRotatingRef = useRef(isAutoRotating);
  const isSunAnimatingRef = useRef(isSunAnimating);

  useEffect(() => {
    isAutoRotatingRef.current = isAutoRotating;
  }, [isAutoRotating]);

  useEffect(() => {
    isSunAnimatingRef.current = isSunAnimating;
  }, [isSunAnimating]);

  useEffect(() => {
    targetExplodeProgressRef.current = isExploded ? 1 : 0;
  }, [isExploded]);

  // Set up Three.js Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f3ee);
    sceneRef.current = scene;

    // Subtle fog for depth
    scene.fog = new THREE.FogExp2(0xf5f3ee, 0.025);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    cameraRef.current = camera;

    // Initial isometric perspective
    const updateCameraPos = () => {
      const { radius, theta, phi } = sphericalRef.current;
      camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(cameraTargetRef.current);
    };
    updateCameraPos();

    // 3. Renderer with antialiasing & shadow mapping
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.7);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd0cbbf, 0.45);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff3db, 1.25);
    sunLight.position.set(10, 14, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    sunLight.shadow.camera.left = -10;
    sunLight.shadow.camera.right = 10;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.bottom = -10;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // 5. Materials
    const foundationMat = new THREE.MeshStandardMaterial({
      color: 0xe0ddd5,
      roughness: 0.8,
      metalness: 0.1,
    });

    const groundFloorMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.4,
      metalness: 0.2,
    });

    const timberCladdingMat = new THREE.MeshStandardMaterial({
      color: 0x9b6b43, // Architectural warm cedar/larch
      roughness: 0.65,
      metalness: 0.05,
    });

    const zincRoofMat = new THREE.MeshStandardMaterial({
      color: 0x3a3f45, // Pre-weathered architectural zinc
      roughness: 0.35,
      metalness: 0.4,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xd6e8fa,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.5,
    });

    const interiorSlabMat = new THREE.MeshStandardMaterial({
      color: 0xd9c5a7, // Oak flooring tone
      roughness: 0.5,
    });

    const gridLineMat = new THREE.LineBasicMaterial({
      color: 0xbfb8a9,
      transparent: true,
      opacity: 0.5,
    });

    // 6. Ground Site / Terrain
    const siteGeometry = new THREE.BoxGeometry(18, 0.4, 16);
    const siteMesh = new THREE.Mesh(siteGeometry, foundationMat);
    siteMesh.position.y = -0.2;
    siteMesh.receiveShadow = true;
    scene.add(siteMesh);

    // Architectural Ground Grid
    const gridHelper = new THREE.GridHelper(16, 16, 0x8c857b, 0xd4cec4);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Patio / Garden Steps
    const patioGeo = new THREE.BoxGeometry(10, 0.15, 4);
    const patioMesh = new THREE.Mesh(patioGeo, new THREE.MeshStandardMaterial({ color: 0xccc7ba, roughness: 0.9 }));
    patioMesh.position.set(0, 0.08, 4.5);
    patioMesh.receiveShadow = true;
    scene.add(patioMesh);

    // 7. Architectural Volumes Groups
    const groundFloorGroup = new THREE.Group();
    const firstFloorGroup = new THREE.Group();
    const roofGroup = new THREE.Group();
    const dimensionsGroup = new THREE.Group();

    // A) Ground Floor Assembly
    // Base slab
    const gfSlab = new THREE.Mesh(new THREE.BoxGeometry(8, 0.25, 7), interiorSlabMat);
    gfSlab.position.set(0, 0.125, 0);
    gfSlab.castShadow = true;
    gfSlab.receiveShadow = true;
    groundFloorGroup.add(gfSlab);

    // Load-bearing core wall (Engineering masonry)
    const coreWall = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.2, 5.5), groundFloorMat);
    coreWall.position.set(-2.5, 1.25, -0.4);
    coreWall.castShadow = true;
    coreWall.receiveShadow = true;
    groundFloorGroup.add(coreWall);

    // Kitchen / utility partition
    const utilWall = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 0.3), new THREE.MeshStandardMaterial({ color: 0xe8e4dc }));
    utilWall.position.set(1.5, 1.25, -2.5);
    utilWall.castShadow = true;
    groundFloorGroup.add(utilWall);

    // Full-height structural glazing (Front & Rear)
    const southGlazing = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.1, 0.1), glassMat);
    southGlazing.position.set(1.2, 1.25, 3.3);
    groundFloorGroup.add(southGlazing);

    // Glazing mullions (Slimline anthracite)
    for (let i = -1.2; i <= 3.6; i += 1.6) {
      const mullion = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 2.2, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.2 })
      );
      mullion.position.set(i, 1.25, 3.3);
      groundFloorGroup.add(mullion);
    }

    // Timber acoustic louvers
    for (let i = -0.8; i <= 1.4; i += 0.3) {
      const fin = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 2.2, 0.35),
        timberCladdingMat
      );
      fin.position.set(-0.8 + i, 1.25, -3.3);
      groundFloorGroup.add(fin);
    }

    // B) First Floor Assembly (Cantilevered Modern Volume)
    // Intermediate floor slab
    const midSlab = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.3, 7.6), interiorSlabMat);
    midSlab.position.set(0, 2.45, 0.1);
    midSlab.castShadow = true;
    midSlab.receiveShadow = true;
    firstFloorGroup.add(midSlab);

    // Cantilevered upper timber pavilion box
    const upperBox = new THREE.Mesh(new THREE.BoxGeometry(8.2, 2.2, 6.2), timberCladdingMat);
    upperBox.position.set(0.3, 3.65, 0.2);
    upperBox.castShadow = true;
    upperBox.receiveShadow = true;
    firstFloorGroup.add(upperBox);

    // Master bedroom corner picture window cutout (represented with glass & frame)
    const upperGlazing = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.6, 0.15), glassMat);
    upperGlazing.position.set(2.2, 3.65, 3.32);
    firstFloorGroup.add(upperGlazing);

    // Cantilevered Balcony
    const balconyFloor = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.12, 1.4), new THREE.MeshStandardMaterial({ color: 0x222222 }));
    balconyFloor.position.set(2.2, 2.4, 4.0);
    balconyFloor.castShadow = true;
    firstFloorGroup.add(balconyFloor);

    // Balcony Frameless Glass Balustrade
    const glassBalustrade = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.9, 0.05), glassMat);
    glassBalustrade.position.set(2.2, 2.9, 4.7);
    firstFloorGroup.add(glassBalustrade);

    // C) Roof Assembly (Zinc standing seam + rooflights)
    const roofSlab = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.35, 7.2), zincRoofMat);
    roofSlab.position.set(0.3, 4.9, 0.2);
    roofSlab.castShadow = true;
    roofSlab.receiveShadow = true;
    roofGroup.add(roofSlab);

    // Recessed Roof Overhang Trim (Passive Solar Shading)
    const roofOverhang = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.12, 7.8), new THREE.MeshStandardMaterial({ color: 0x111111 }));
    roofOverhang.position.set(0.3, 5.05, 0.2);
    roofOverhang.castShadow = true;
    roofGroup.add(roofOverhang);

    // Architectural Walk-on Roof Skylights
    const skylight1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.18, 1.2), glassMat);
    skylight1.position.set(-1.8, 5.15, 0.4);
    roofGroup.add(skylight1);

    const skylight2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.18, 1.2), glassMat);
    skylight2.position.set(1.4, 5.15, -1.2);
    roofGroup.add(skylight2);

    // Minimalist Landscaping: Stylized Architectural Column Trees
    const makeTree = (x: number, z: number, height: number) => {
      const treeGroup = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.12, height * 0.4, 8),
        new THREE.MeshStandardMaterial({ color: 0x4a3d31 })
      );
      trunk.position.y = height * 0.2;
      trunk.castShadow = true;
      treeGroup.add(trunk);

      const foliage = new THREE.Mesh(
        new THREE.ConeGeometry(0.8, height * 0.8, 7),
        new THREE.MeshStandardMaterial({ color: 0x5a6953, roughness: 0.9 })
      );
      foliage.position.y = height * 0.6;
      foliage.castShadow = true;
      treeGroup.add(foliage);

      treeGroup.position.set(x, 0, z);
      scene.add(treeGroup);
    };

    makeTree(-6.5, 3.5, 4.2);
    makeTree(-6.8, -4.2, 4.8);
    makeTree(6.2, -4.5, 3.6);

    // D) 3D DIMENSION LINES & METRIC TICKS
    const createDimensionLine = (
      start: THREE.Vector3,
      end: THREE.Vector3,
      offset: THREE.Vector3,
      color: number = 0xC51B18
    ) => {
      const dimGroup = new THREE.Group();
      const p1 = start.clone().add(offset);
      const p2 = end.clone().add(offset);

      // Main line
      const points = [p1, p2];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({ color, linewidth: 2 });
      const line = new THREE.Line(lineGeo, lineMat);
      dimGroup.add(line);

      // Extension witness lines
      const ext1 = [start, p1];
      const ext2 = [end, p2];
      const extGeo1 = new THREE.BufferGeometry().setFromPoints(ext1);
      const extGeo2 = new THREE.BufferGeometry().setFromPoints(ext2);
      const extMat = new THREE.LineDashedMaterial({ color: 0x888888, dashSize: 0.1, gapSize: 0.05 });
      dimGroup.add(new THREE.Line(extGeo1, extMat));
      dimGroup.add(new THREE.Line(extGeo2, extMat));

      // Architectural ticks (45-degree angle slashes)
      const tickLength = 0.25;
      const makeTick = (pos: THREE.Vector3) => {
        const tickPoints = [
          new THREE.Vector3(pos.x - tickLength, pos.y - tickLength, pos.z),
          new THREE.Vector3(pos.x + tickLength, pos.y + tickLength, pos.z),
        ];
        const tickGeo = new THREE.BufferGeometry().setFromPoints(tickPoints);
        return new THREE.Line(tickGeo, new THREE.LineBasicMaterial({ color, linewidth: 3 }));
      };
      dimGroup.add(makeTick(p1));
      dimGroup.add(makeTick(p2));

      return dimGroup;
    };

    // Dimension 1: Primary Facade Span Width (X axis)
    const dimWidth = createDimensionLine(
      new THREE.Vector3(-4.1, 0, 4.8),
      new THREE.Vector3(4.5, 0, 4.8),
      new THREE.Vector3(0, 0, 1.2),
      0xC51B18
    );
    dimensionsGroup.add(dimWidth);

    // Dimension 2: Building Depth (Z axis)
    const dimDepth = createDimensionLine(
      new THREE.Vector3(5.2, 0, -3.6),
      new THREE.Vector3(5.2, 0, 4.0),
      new THREE.Vector3(1.4, 0, 0),
      0x1a1a1a
    );
    dimensionsGroup.add(dimDepth);

    // Dimension 3: Total Height to Parapet (Y axis)
    const dimHeight = createDimensionLine(
      new THREE.Vector3(-4.8, 0, 0),
      new THREE.Vector3(-4.8, 5.1, 0),
      new THREE.Vector3(-1.2, 0, 0),
      0xC51B18
    );
    dimensionsGroup.add(dimHeight);

    // Dimension 4: Ground Floor Ceiling Clearance
    const dimCeiling = createDimensionLine(
      new THREE.Vector3(4.8, 0.2, 3.2),
      new THREE.Vector3(4.8, 2.4, 3.2),
      new THREE.Vector3(0.5, 0, 0),
      0x2563eb
    );
    dimensionsGroup.add(dimCeiling);

    // Add all groups to scene
    scene.add(groundFloorGroup);
    scene.add(firstFloorGroup);
    scene.add(roofGroup);
    scene.add(dimensionsGroup);

    explodedGroupRef.current = {
      groundFloor: groundFloorGroup,
      firstFloor: firstFloorGroup,
      roof: roofGroup,
      dimensionsGroup: dimensionsGroup,
    };

    // 8. Animation & Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth Exploded Axonometric Interpolation
      const diff = targetExplodeProgressRef.current - currentExplodeProgressRef.current;
      if (Math.abs(diff) > 0.001) {
        currentExplodeProgressRef.current += diff * 0.08;
      } else {
        currentExplodeProgressRef.current = targetExplodeProgressRef.current;
      }

      const p = currentExplodeProgressRef.current;
      if (explodedGroupRef.current) {
        explodedGroupRef.current.groundFloor.position.y = p * 0.4;
        explodedGroupRef.current.firstFloor.position.y = p * 2.2;
        explodedGroupRef.current.roof.position.y = p * 4.6;
        // Fade or shift dimensions with explosion
        explodedGroupRef.current.dimensionsGroup.visible = showDimensions && p < 0.2;
      }

      // Auto rotation
      if (isAutoRotatingRef.current && !isDraggingRef.current) {
        sphericalRef.current.theta += delta * 0.25;
        updateCameraPos();
      }

      // Sun animation
      if (isSunAnimatingRef.current && sunLightRef.current) {
        const time = (clock.getElapsedTime() * 0.5) % (Math.PI * 2);
        const sunX = Math.cos(time) * 14;
        const sunY = Math.max(Math.sin(time) * 14, 2);
        const sunZ = Math.sin(time) * 10;
        sunLightRef.current.position.set(sunX, sunY, sunZ);

        // Approximate hour from sun position
        const calcHour = 8 + ((time / (Math.PI * 2)) * 12);
        setTimeOfDay(Math.round(calcHour));
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Mouse & Drag Interaction Listeners
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

      sphericalRef.current.theta -= deltaX * 0.008;
      sphericalRef.current.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.05, sphericalRef.current.phi - deltaY * 0.008)
      );

      updateCameraPos();
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      sphericalRef.current.radius = Math.max(
        6,
        Math.min(26, sphericalRef.current.radius + e.deltaY * 0.02)
      );
      updateCameraPos();
    };

    // Touch interaction for mobile
    let touchStartDist = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDraggingRef.current) {
        const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
        const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        sphericalRef.current.theta -= deltaX * 0.008;
        sphericalRef.current.phi = Math.max(
          0.1,
          Math.min(Math.PI / 2 - 0.05, sphericalRef.current.phi - deltaY * 0.008)
        );
        updateCameraPos();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const delta = touchStartDist - dist;
        sphericalRef.current.radius = Math.max(
          6,
          Math.min(26, sphericalRef.current.radius + delta * 0.02)
        );
        touchStartDist = dist;
        updateCameraPos();
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('wheel', handleWheel, { passive: false });
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    domElement.addEventListener('touchend', handleTouchEnd);

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      resizeObserver.disconnect();
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('wheel', handleWheel);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);
      domElement.removeEventListener('touchend', handleTouchEnd);

      // Clean up WebGL resources
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  // Wireframe toggle effect
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => (m.wireframe = isWireframe));
        } else {
          child.material.wireframe = isWireframe;
        }
      }
    });
  }, [isWireframe]);

  // Dimension visibility toggle effect
  useEffect(() => {
    if (explodedGroupRef.current) {
      explodedGroupRef.current.dimensionsGroup.visible = showDimensions && !isExploded;
    }
  }, [showDimensions, isExploded]);

  // Camera presets
  const setCameraPreset = (preset: 'iso' | 'front' | 'side' | 'top') => {
    setActiveCameraView(preset);
    setIsAutoRotating(false);

    if (!cameraRef.current) return;

    if (preset === 'iso') {
      sphericalRef.current = { radius: 14, theta: Math.PI / 4, phi: Math.PI / 3 };
    } else if (preset === 'front') {
      sphericalRef.current = { radius: 15, theta: 0, phi: Math.PI / 2.1 };
    } else if (preset === 'side') {
      sphericalRef.current = { radius: 15, theta: Math.PI / 2, phi: Math.PI / 2.1 };
    } else if (preset === 'top') {
      sphericalRef.current = { radius: 16, theta: 0.001, phi: 0.08 };
    }

    const { radius, theta, phi } = sphericalRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(cameraTargetRef.current);
  };

  return (
    <div
      id="project-3d-dimensions-viewer"
      className={`relative w-full bg-[#f4f1ea] border border-[#dcd8cc] shadow-[8px_8px_0px_0px_rgba(26,26,26,0.04)] overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 h-screen border-none shadow-none' : 'h-[520px] sm:h-[620px]'
      }`}
    >
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Header Bar with Project Metadata */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 flex items-start justify-between pointer-events-none bg-gradient-to-b from-[#f4f1ea]/90 via-[#f4f1ea]/40 to-transparent">
        <div className="space-y-1 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C51B18]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#736e65]">
              3D SPATIAL MODEL & BIM DIMENSIONS
            </span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1a1a1a] tracking-tight">
            {projectTitle}
          </h3>
          <p className="text-xs text-[#5c5850] font-light hidden sm:block">
            Interactive CAD/BIM model with verified architectural dimensions & daylight study.
          </p>
        </div>

        {/* Top-Right Utility Buttons */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`p-2 border text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              isAutoRotating
                ? 'bg-[#1a1a1a] text-[#f4f1ea] border-[#1a1a1a]'
                : 'bg-white text-[#5c5850] border-[#dcd8cc] hover:border-[#1a1a1a]'
            }`}
            title="Toggle 360 Turntable Orbit"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">{isAutoRotating ? 'Orbiting' : 'Orbit'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white hover:bg-[#edeae1] border border-[#dcd8cc] text-[#1a1a1a] transition-all cursor-pointer"
            title={isFullscreen ? 'Exit Full Screen' : 'Expand Full Screen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating 3D Dimensions Legend Cards (Left Column) */}
      <div className="absolute left-4 top-24 sm:top-28 space-y-2 pointer-events-auto max-w-[240px]">
        <div className="bg-white/90 backdrop-blur-sm border border-[#dcd8cc] p-3 shadow-sm space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#dcd8cc]">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a1a1a] flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5 text-[#C51B18]" />
              3D Dimensions
            </span>
            <button
              type="button"
              onClick={() => setShowDimensions(!showDimensions)}
              className="text-[10px] font-mono text-[#736e65] hover:text-[#1a1a1a] uppercase underline cursor-pointer"
            >
              {showDimensions ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div
              className={`p-1.5 border transition-all cursor-pointer flex items-center justify-between ${
                selectedDimension === 'width' ? 'bg-[#C51B18]/10 border-[#C51B18]' : 'bg-[#f4f1ea]/70 border-transparent hover:border-[#dcd8cc]'
              }`}
              onClick={() => setSelectedDimension(selectedDimension === 'width' ? null : 'width')}
            >
              <span className="text-[#5c5850]">Facade Span</span>
              <strong className="text-[#C51B18]">{dimensions.width}</strong>
            </div>

            <div
              className={`p-1.5 border transition-all cursor-pointer flex items-center justify-between ${
                selectedDimension === 'depth' ? 'bg-[#1a1a1a]/10 border-[#1a1a1a]' : 'bg-[#f4f1ea]/70 border-transparent hover:border-[#dcd8cc]'
              }`}
              onClick={() => setSelectedDimension(selectedDimension === 'depth' ? null : 'depth')}
            >
              <span className="text-[#5c5850]">Garden Depth</span>
              <strong className="text-[#1a1a1a]">{dimensions.depth}</strong>
            </div>

            <div
              className={`p-1.5 border transition-all cursor-pointer flex items-center justify-between ${
                selectedDimension === 'height' ? 'bg-[#C51B18]/10 border-[#C51B18]' : 'bg-[#f4f1ea]/70 border-transparent hover:border-[#dcd8cc]'
              }`}
              onClick={() => setSelectedDimension(selectedDimension === 'height' ? null : 'height')}
            >
              <span className="text-[#5c5850]">Parapet Ridge</span>
              <strong className="text-[#C51B18]">{dimensions.height}</strong>
            </div>

            <div
              className={`p-1.5 border transition-all cursor-pointer flex items-center justify-between ${
                selectedDimension === 'ceiling' ? 'bg-blue-50 border-blue-500' : 'bg-[#f4f1ea]/70 border-transparent hover:border-[#dcd8cc]'
              }`}
              onClick={() => setSelectedDimension(selectedDimension === 'ceiling' ? null : 'ceiling')}
            >
              <span className="text-[#5c5850]">Ceiling Clear</span>
              <strong className="text-blue-600">{dimensions.ceiling}</strong>
            </div>
          </div>
        </div>

        {/* Daylight Sun Study Indicator */}
        <div className="bg-white/90 backdrop-blur-sm border border-[#dcd8cc] p-2.5 shadow-sm flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#736e65]">
            <Sun className={`w-3.5 h-3.5 text-amber-500 ${isSunAnimating ? 'animate-pulse' : ''}`} />
            <span>Sun Angle:</span>
          </div>
          <span className="font-bold text-[#1a1a1a]">{timeOfDay}:00 BST</span>
        </div>
      </div>

      {/* Bottom Architectural Control Center */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#f4f1ea] via-[#f4f1ea]/90 to-transparent pointer-events-none flex flex-wrap items-end justify-between gap-3">
        {/* Left: 3D Animations and Modes */}
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          {/* Exploded Axonometric Animation Button */}
          <button
            type="button"
            id="3d-explode-animation-btn"
            onClick={() => {
              setIsExploded(!isExploded);
              setIsAutoRotating(false);
            }}
            className={`px-3 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer shadow-sm ${
              isExploded
                ? 'bg-[#C51B18] text-white border-[#C51B18]'
                : 'bg-white text-[#1a1a1a] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isExploded ? 'Reassemble 3D' : '3D Exploded Axonometric'}</span>
          </button>

          {/* Daylight Sun Path Simulation Animation */}
          <button
            type="button"
            id="3d-sun-animation-btn"
            onClick={() => setIsSunAnimating(!isSunAnimating)}
            className={`px-3 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer shadow-sm ${
              isSunAnimating
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white text-[#5c5850] border-[#dcd8cc] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{isSunAnimating ? 'Pause Sun Path' : 'Simulate Daylight'}</span>
          </button>

          {/* Wireframe CAD Blueprint Mode */}
          <button
            type="button"
            id="3d-wireframe-toggle-btn"
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-3 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer shadow-sm ${
              isWireframe
                ? 'bg-[#1a1a1a] text-[#f4f1ea] border-[#1a1a1a]'
                : 'bg-white text-[#5c5850] border-[#dcd8cc] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>{isWireframe ? 'Realistic Shading' : 'CAD Wireframe'}</span>
          </button>
        </div>

        {/* Right: Camera Angle Presets */}
        <div className="flex items-center gap-1 bg-white border border-[#dcd8cc] p-1 pointer-events-auto shadow-sm">
          <span className="text-[9px] font-mono text-[#736e65] uppercase px-1.5 hidden sm:inline">
            Camera:
          </span>
          <button
            type="button"
            onClick={() => setCameraPreset('iso')}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-all cursor-pointer ${
              activeCameraView === 'iso' ? 'bg-[#1a1a1a] text-white' : 'text-[#5c5850] hover:text-[#1a1a1a]'
            }`}
          >
            Isometric
          </button>
          <button
            type="button"
            onClick={() => setCameraPreset('front')}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-all cursor-pointer ${
              activeCameraView === 'front' ? 'bg-[#1a1a1a] text-white' : 'text-[#5c5850] hover:text-[#1a1a1a]'
            }`}
          >
            Elevation
          </button>
          <button
            type="button"
            onClick={() => setCameraPreset('side')}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-all cursor-pointer ${
              activeCameraView === 'side' ? 'bg-[#1a1a1a] text-white' : 'text-[#5c5850] hover:text-[#1a1a1a]'
            }`}
          >
            Section
          </button>
          <button
            type="button"
            onClick={() => setCameraPreset('top')}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-all cursor-pointer ${
              activeCameraView === 'top' ? 'bg-[#1a1a1a] text-white' : 'text-[#5c5850] hover:text-[#1a1a1a]'
            }`}
          >
            Site Plan
          </button>
        </div>
      </div>
    </div>
  );
}
