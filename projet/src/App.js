
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Login from "./component/pages/login/Login";
import Settings from "./component/pages/settings/Settings";
import Register from './component/pages/register/Register';
import Home from './component/pages/home/Home';
import Contact from './component/pages/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/footer/Footer';
import Admin from './component/pages/admin/Admin';
import Program from './component/pages/program/Program';
import Parent from './component/pages/parent/Parent';
import ParentSpace from './component/pages/parent/ParentSpace'
import Professor from './component/pages/Professor/Professor';
function App() {

  return (
  <div>
  <Router>
  <Navbar />
  <Routes>
          <Route exact path="/" element=<Home/>></Route> 
          <Route path="/register" element=<Register /> ></Route>
          <Route path="/program" element=<Program/>></Route>
          <Route path="/login" element= <Login /> ></Route>
          <Route path="/settings" element= <Settings /> ></Route>
          <Route path="/contact" element= <Contact/> ></Route>
          <Route path="/admin" element=  <Admin/> ></Route>
          <Route path="/parent" element=  <Parent/> ></Route>
          <Route path="/parentSpace" element=  <ParentSpace/> ></Route>
          <Route path="/professor" element=  <Professor/> ></Route>
        </Routes>
</Router>
   
 <Footer/>
    
    
  </div>
  );
}

export default App;
