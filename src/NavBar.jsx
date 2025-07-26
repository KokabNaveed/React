import { Link } from "react-router";
import './Styles/header.css'

function NavBar(){
    return(
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
                    <Link to='/about' className="link">About</Link>
                </li>
                <li>
                    <Link to='/login' className="link">Login</Link>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar;