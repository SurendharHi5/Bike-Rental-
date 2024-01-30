import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Booking from "./pages/Booking"
import { useEffect } from "react";
import Protect from "./protectPages/Protect";


function App() {

  return (
   <div>
      <BrowserRouter>
          <Routes>
              <Route element={<Protect />}>
                <Route path="/" element={ <Home /> } />
                <Route path="/booking/:id" element={ <Booking/> } />
              </Route>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
          </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App



