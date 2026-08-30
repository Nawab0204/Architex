import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'extending-victorian-edwardian-homes-birmingham',
    title: 'Extending Victorian and Edwardian Homes in Birmingham: A Design Guide',
    category: 'Residential Design',
    date: 'February 2025',
    readTime: '5 min read',
    excerpt: 'How to combine historic craftsmanship with contemporary open-plan living, daylight optimization, and energy efficiency in period properties.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    author: {
      name: 'Architex Editorial',
      role: 'Architectural Design Practice'
    },
    content: {
      leadParagraph: 'Birmingham boasts some of the finest Victorian and Edwardian residential suburbs in the UK, from the leafy avenues of Edgbaston and Harborne to the characterful terraces of Moseley and Bournville. However, the compartmentalized floor plans of the 19th and early 20th centuries rarely suit modern family life.',
      sections: [
        {
          heading: '1. Diagnosing the Original Footprint',
          text: [
            'Historic properties were configured around distinct functional rooms—parlours, sculleries, and outhouses. The primary architectural challenge is uniting these disconnected ground floor spaces without compromising the structural stability or front-facing heritage value of the home.',
            'By identifying non-loadbearing partitions and coordinating strategic steelwork insertions, we can create generous kitchen, dining, and family gathering spaces that flow effortlessly into the garden.'
          ],
          quote: 'The most successful historic home transformations do not mimic the past; they create a respectful, contemporary conversation between old and new.'
        },
        {
          heading: '2. Bringing Natural Daylight into Deep Floorplates',
          text: [
            'Extending to the rear of deep terraced or semi-detached homes can inadvertently cast the middle of the house into shadow. Architectural design must deliberately address daylight distribution.',
            'We frequently employ strategically positioned frameless rooflights, internal courtyards, glazed links, and split-level ceiling volumes to draw natural light deep into the heart of the ground floor.'
          ],
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
          caption: 'Rooflight positioning channels morning and afternoon light across the dining area.'
        },
        {
          heading: '3. Material Continuity and Contrast',
          text: [
            'Rather than trying to match century-old handmade bricks with modern factory duplicates, high-quality contemporary additions often look best when using contrasting yet complementary materials—such as blackened timber cladding, tactile engineering bricks, zinc fascias, and slimline aluminium glazed doors.'
          ]
        }
      ],
      conclusion: 'A well-considered extension should enhance everyday living, respect its historic context, and provide long-lasting value for generations to come.'
    }
  },
  {
    id: 'art-2',
    slug: 'navigating-birmingham-planning-permission-guide',
    title: 'Navigating Planning Permission in Birmingham: What Every Homeowner Needs to Know',
    category: 'Planning & Policy',
    date: 'January 2025',
    readTime: '6 min read',
    excerpt: 'An overview of Permitted Development rights, conservation area considerations, and the statutory 8-week planning application journey.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    author: {
      name: 'Architex Editorial',
      role: 'Planning & Design Practice'
    },
    content: {
      leadParagraph: 'Planning permission can feel like a daunting hurdle for homeowners planning an extension or new build. Understanding how local authority planning policies operate in Birmingham and the West Midlands demystifies the process and accelerates approval.',
      sections: [
        {
          heading: '1. Permitted Development vs. Full Planning',
          text: [
            'In England, certain domestic improvements fall under Permitted Development (PD) rights. This allows single-storey rear extensions up to 4 metres for attached houses (or 8m under the Prior Approval scheme), single-storey detached additions up to 4 metres, and certain loft conversions.',
            'However, if your property is situated within a designated Conservation Area, is a Listed building, or has had its Permitted Development rights removed by an Article 4 Direction, full planning permission will be required.'
          ]
        },
        {
          heading: '2. The Role of Clear Architectural Drawings',
          text: [
            'Planning applications are evaluated on visual massing, impact on neighboring amenity (light and privacy), and architectural quality. Vague or inaccurate drawings invite planning officer pushback.',
            'High-quality CAD drawings with accurate context levels, verified boundary offsets, and detailed Design & Access Statements give planning officers the clarity they need to grant approval.'
          ],
          quote: 'Clear architectural communication directly minimizes planning delays and costly revisions.'
        },
        {
          heading: '3. The Statutory 8-Week Determination Period',
          text: [
            'Once validated by Birmingham City Council or Solihull Council, standard householder applications follow an 8-week determination timetable. During this window, neighbor consultations take place, and planning officers assess site suitability.'
          ]
        }
      ],
      conclusion: 'Engaging with experienced architectural designers early ensures your proposal is designed to align with planning policy from the very first sketch.'
    }
  },
  {
    id: 'art-3',
    slug: 'the-value-of-3d-architectural-visualisation',
    title: 'The Value of 3D Visualisation in Residential Architectural Design',
    category: 'Visualisation',
    date: 'December 2024',
    readTime: '4 min read',
    excerpt: 'Why photorealistic 3D architectural imagery and spatial models help clients and planning officers make confident, informed decisions.',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
    author: {
      name: 'Architex Editorial',
      role: '3D Visualisation Team'
    },
    content: {
      leadParagraph: 'While 2D technical drawings (plans, elevations, and sections) are essential for builders and building control officers, they can be challenging for non-specialists to visualize in real three-dimensional space.',
      sections: [
        {
          heading: '1. Eliminating Spatial Uncertainty',
          text: [
            '3D architectural visualisations accurately simulate room heights, natural lighting conditions at different times of day, and sightlines between indoor and outdoor zones.',
            'This allows you to walk through spatial choices—such as kitchen island placement, glazing configurations, or ceiling step-downs—before any physical construction begins.'
          ]
        },
        {
          heading: '2. Testing Material Textures and Finishes',
          text: [
            'Will a dark zinc cladding look harmonious alongside your existing brickwork? How will timber slats weather over time? High-fidelity visualisations let you compare materials and finishes in true-to-life environmental lighting.'
          ],
          quote: 'Visualisation replaces guesswork with certainty, ensuring the finished building meets your exact expectations.'
        }
      ],
      conclusion: 'Investing in architectural visualisation saves time, avoids costly on-site alterations, and builds complete confidence throughout the journey.'
    }
  }
];
