import { Link, NavLink, Outlet } from "react-router";

export default function University2(){
    return(
        <div style={{textAlign:'center'}} className="university">
            <h2><Link to='/'>Back To Home</Link> </h2>
            <h1>University</h1>
                    <NavLink to='department1' className="link1">Department</NavLink>
                    <NavLink to='' className="link1">Courses</NavLink> {/* empty becuase it is a index layout */}
                    <NavLink to='detail' className="link1">Details</NavLink>
                    <Outlet/>
        </div>
    )
}