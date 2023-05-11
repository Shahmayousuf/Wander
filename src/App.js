import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
 import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Button from "./Components/Button";
import Home from "./Pages/Home";
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  element={<Navbar/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/sign-up'element={<Button/>}></Route> */}
          
          
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
