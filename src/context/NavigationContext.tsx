import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isPending: boolean;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPath: '/',
  navigate: () => {},
  isPending: false,
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname + window.location.search;
    }
    return '/';
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      startTransition(() => {
        setCurrentPath(window.location.pathname + window.location.search);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      startTransition(() => {
        setCurrentPath(path);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate, isPending }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}

export function Link({
  href,
  children,
  className = '',
  id,
  target,
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}) {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (target === '_blank' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      id={id}
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
