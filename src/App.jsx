import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-bg text-text font-body">
        <Navbar />
        <Hero />
      </div>
    </OrderProvider>
  );
}
