import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RetailWholesale from '@/components/RetailWholesale';
import Brands from '@/components/Brands';
import Wholesale from '@/components/Wholesale';
import Story from '@/components/Story';
import Footer from '@/components/Footer';
import RetailPage from '@/components/RetailPage';
import WholesalePage from '@/components/WholesalePage';
import { type Route, parseRoute } from '@/lib/navigation';

function App() {
  const [route, setRoute] = useState<Route>(parseRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar route={route} />
      <main>
        {route === 'home' && (
          <>
            <Hero />
            <RetailWholesale />
            <Brands />
            <Wholesale />
            <Story />
          </>
        )}
        {route === 'retail' && <RetailPage />}
        {route === 'wholesale' && <WholesalePage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
