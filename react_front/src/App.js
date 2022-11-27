import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/LoginAndSIgnup/login';
import Register from './Components/LoginAndSIgnup/Register';
import Admin from './Components/adminpage/Admin';
import Addproduct from './Components/addproduct&addcoupon/Addproduct';
import Addcoupon from './Components/addproduct&addcoupon/Addcoupon';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
       <div className="App">
          <Routes>

            {/* 
            aravind code eg...
            <Route exact path={"/"} element={<ProductsList />} /> */}
            <Route  exact path={"/Login"} element={<Login/>}/>
            <Route  exact path={"/Register"} element={<Register/>}/>
            <Route exact path={"/Admin"} element={<Admin/>}/>
            <Route exact path={"/Addproduct"} element={<Addproduct/>}/>
            <Route exact path={"/Addcoupon"} element={<Addcoupon/>}/>
          </Routes>
       </div>
    </div>
    
  );
}

export default App;
