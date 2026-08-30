import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

function Router() {
  const { currentPath } = useNavigation();

  // Parse path without query strings
  const pathname = currentPath.split('?')[0] || '/';

  // Match /projects/:slug
  if (pathname.startsWith('/projects/')) {
    const slug = pathname.replace('/projects/', '');
    if (slug) {
      return <ProjectDetailPage slug={slug} />;
    }
  }

  // Match /services/:slug
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    if (slug) {
      return <ServiceDetailPage slug={slug} />;
    }
  }

  // Match /insights/:slug
  if (pathname.startsWith('/insights/')) {
    const slug = pathname.replace('/insights/', '');
    if (slug) {
      return <ArticleDetailPage slug={slug} />;
    }
  }

  switch (pathname) {
    case '/':
      return <HomePage />;
    case '/projects':
      return <ProjectsPage />;
    case '/services':
      return <ServicesPage />;
    case '/about':
      return <AboutPage />;
    case '/process':
      return <ProcessPage />;
    case '/insights':
      return <InsightsPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy':
      return <LegalPage type="privacy" />;
    case '/cookies':
      return <LegalPage type="cookies" />;
    case '/terms':
      return <LegalPage type="terms" />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  );
}
