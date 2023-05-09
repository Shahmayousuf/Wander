import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
 import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          {/* <Route path='/sign-up'element={<Button/>}></Route> */}
          </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
