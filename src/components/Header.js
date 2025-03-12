import { LOGO_URL, logo_url } from "../utils/constants";
import { useState , useContext  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{
  
  const [btnNameReact,setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  //console.log(loggedInUser);
  return(
  <div className="flex justify-between bg-pink-100 shadow-lg ">
    <div className="logo-container">
        <img className="w-28 " 
        src= {LOGO_URL}
        alt="abc"/>
    </div>
    <div className="flex items-center s ">
        <ul className="flex p-4 m-4">
          <li className="px-2">
            Online Status :{onlineStatus ? "🟢":"🔴"}
          </li>
            <li className="px-2">
              <Link to="/"> Home </Link>
            </li>
            <li className="px-2">
              <Link to="/about"> About Us </Link>
            </li>
            <li className="px-2">
              <Link to="/grocery"> Grocery </Link>
            </li>
            <li className="px-2  font-bold text-xl">
              <Link to="/cart"> Cart  ({cartItems.length} items) </Link>
            </li>
            
           <li className="px-4">{loggedInUser}</li>   
            <button type="button" className="btn btn-success"
            onClick={()=>{
              btnNameReact === "Login" ?
              setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}>{btnNameReact}</button>
            
           
        </ul>
        
    </div>
  </div>
    );   
  };
  export default Header;

