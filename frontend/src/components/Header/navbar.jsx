import { FaBookOpen } from "react-icons/fa";
import ThemeDropDown from "../ThemesDropDownMenu/themeDropDown"
import "./navbar.css"
import Logout from "./logout";
import localname from "./localname";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = ()=>{

    return(
        <nav className="nav-container">
            <div className="nav-logo">
                <FaBookOpen color="red" size="50px"/>
            </div>
            <div  className="userInfo">
            <div className="userImage"></div>
            <p className="username" ><AiOutlineUser color="green"  size="25px"/><b>{localname()}</b></p>
                
            </div>
            <span className="Logout"><Logout/></span>
                <ThemeDropDown/>
        </nav>
    )
}
export default Navbar;

