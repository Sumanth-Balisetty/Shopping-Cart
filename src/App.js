import './App.css';
import Cart from './Components/Cart/Cart';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
