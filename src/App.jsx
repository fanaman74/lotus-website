import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import Events from './components/Events';

export default function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-bg text-text font-body">
        <Navbar />
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Events />
      </div>
    </OrderProvider>
  );
}
