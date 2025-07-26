import { Link, Outlet } from "react-router";
import './Styles/header.css'

function NavBar() {
    return (
       <div>
         <div className="header">
            <div>
                <Link className="link" to='/'><h2>Logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li>
                        <Link to='/pk/user/about' className="link">About</Link>
                    </li>
                    <li>
                        <Link to='/pk/user/login' className="link">Login</Link>
                    </li>
                    <li>
                        <Link to='/university' className="link">University</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet/>
       </div>
    )
}

export default NavBar;