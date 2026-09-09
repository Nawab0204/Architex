import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { IndexPage } from './pages/IndexPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { InsightsPage } from './pages/InsightsPage';
import { BlogsPage } from './pages/BlogsPage';
import { FAQPage } from './pages/FAQPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

function Router() {
  const { currentPath } = useNavigation();

  // Parse path without query strings
  const pathname = currentPath.split('?')[0] || '/';

  // Match /projects/:slug or /project/:slug
  if (pathname.startsWith('/projects/')) {
    const slug = pathname.replace('/projects/', '');
    if (slug) {
      return <ProjectDetailPage slug={slug} />;
    }
  }

  if (pathname.startsWith('/project/')) {
    const slug = pathname.replace('/project/', '');
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
    case '/portfolio':
    case '/projects':
      return <ProjectsPage />;
    case '/index':
      return <IndexPage />;
    case '/services':
      return <ServicesPage />;
    case '/about':
    case '/about-us':
      return <AboutPage />;
    case '/process':
      return <ProcessPage />;
    case '/insights':
      return <InsightsPage />;
    case '/blog':
    case '/blogs':
      return <BlogsPage />;
    case '/faq':
    case '/faqs':
      return <FAQPage />;
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
