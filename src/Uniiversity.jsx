import { NavLink, Outlet } from "react-router";

export default function University2(){
    return(
        <div style={{textAlign:'center'}} className="university">
            <h1>University</h1>
                    <NavLink to='department1' className="link1">Department</NavLink>
                    <NavLink to='course' className="link1">Courses</NavLink>
                    <NavLink to='detail' className="link1">Details</NavLink>
                    <Outlet/>
        </div>
    )
}