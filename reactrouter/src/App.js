import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import OrderSummary from './pages/order-confirmed/orderSummary';
import NoMatch from './pages/NoMatch/NoMatch';

function App() {
  return (<>
    <NavBar></NavBar>
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="order" element={<OrderSummary />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  </>
  );
}

export default App;
