import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-bg text-text font-body">
        <Navbar />
      </div>
    </OrderProvider>
  );
}
