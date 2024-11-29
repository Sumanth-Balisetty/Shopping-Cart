import './App.css';
import Cart from './Components/Cart/Cart';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Account from './Components/Account/Account';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/home' exact element={<Homepage/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/account' exact element={<Account/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
