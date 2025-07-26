import { NavLink, Link, Outlet } from "react-router";
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
                            <NavLink to='/' className={({isActive})=> isActive? 'custom-Active link':'link'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/pk/user/about' className="link">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/pk/user/login' className="link">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/university' className="link">University</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className="link">Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user/list' className="link">List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar;