import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
 import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Button from "./Components/Button";
import Home from "./Pages/Home";
import './App.css'
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Signup from "./Pages/Signup";
import Layout from "./Pages/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/sign-up' element={<Signup/>}></Route>
          
          </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
