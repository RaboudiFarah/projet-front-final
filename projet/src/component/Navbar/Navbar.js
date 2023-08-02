import  "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
const user = false
  return (
    <div className="top">
    <div className="topLeft">
    <i className="topIcon fab fa-facebook-square"></i>
    <i className="topIcon fab fa-instagram-square"></i>
    <i className="topIcon fab fa-twitter-square"></i>
  </div>
  
  <div className="topCenter">
  <ul className="topList">
    <li className="topListItem"> 
    <Link className="link" to="/" style ={{textDecoration:"none",color:"inherit"}}>
    Home
  </Link></li>
  
    <li className="topListItem">
     <Link className="link" to="/program" style ={{textDecoration:"none",color:"inherit"}}>
    Program
  </Link></li>
    
    <li className="topListItem">
    <Link to="/contact" style ={{textDecoration:"none",color:"inherit"}}>Contact
    </Link></li>
    
    <li className="topListItem"> 
    <Link className="link" to="/admin" style ={{textDecoration:"none",color:"inherit"}}>
    Admin
  </Link></li>
  <li className="topListItem"> 
    <Link className="link" to="/parent" style ={{textDecoration:"none",color:"inherit"}}>
  parent
  </Link></li>
  <li className="topListItem"> 
    <Link className="link" to="/parentSpace" style ={{textDecoration:"none",color:"inherit"}}>
  parentSpace
  </Link></li>
  <li className="topListItem"> 
  <Link className="link" to="/professor" style ={{textDecoration:"none",color:"inherit"}}>
ProfessorSpace
</Link></li>
  </ul>
    </div>

    <div className="topRight">
    {user ? (
      <Link className="link" to="/settings">
        <img
          className="topImg"
          src=" https://media.istockphoto.com/id/1270061264/sv/vektor/teen-boy-med-tummen-upp-vector-cartoon.jpg?s=170667a&w=0&k=20&c=v_KkVsCvJXXAaXL6kI9XRaTBchCmOKUasb5DDSgp1qs="
          alt=""
        />
      </Link>
    ) : (
      <ul className="topList">
        <li className="topListItem">
        <button className="button2">
          <Link className="link" to="/login" style ={{textDecoration:"none",color:"inherit"}}>
            LOGIN
          </Link>
          </button>
        </li>
        <li className="topListItem">
        <button className="button2">
          <Link className="link" to="/register" style ={{textDecoration:"none",color:"inherit"}}>
            REGISTER
          </Link>
          </button>
        </li>
    
      </ul>
    )}
    <i className="topSearchIcon fas fa-search"></i>
  </div>
    </div>
  );
}

export default Navbar