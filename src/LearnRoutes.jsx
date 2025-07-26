import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotfound";
import University2 from "./Uniiversity";
import Department1 from "./Departmentt";
import Details from "./Details";
import Course from "./Courses";
import Users from "./Users";
import UserDetails from "./UserDetails";

function LearnRoutes() {
    return (
        <>
            {/* <NavBar /> */}

            <Routes>
                <Route element={<NavBar />}> {/* layout route ...only for home, about and login pages, navbar will show */}
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<Users />}/>
                    <Route path="/userdetail/:id" element={<UserDetails />}/>
                    <Route path="pk">
                        <Route path="/pk/user">
                            <Route path="/pk/user/about" element={<About />} />
                            <Route path="/pk/user/login" element={<Login />} />
                        </Route>
                    </Route>
                </Route>

                <Route path="/university" element={<University2 />}>
                    <Route path="department1" element={<Department1 />} />
                    <Route path="detail" element={<Details />} />
                    <Route index element={<Course />} /> {/* index route will show default value of that component on parent one */}
                </Route>

                

                <Route path="/*" element={<Navigate to={"/login"} />} /> {/* Navigate to login page*/}

                {/* <Route path="/*" element={<PageNotFound/>} /> */} {/* Write new jsx page address */}

                {/* <Route path="/*" element={<h1>Page Not Found <br /> Error 404</h1>} /> */} { /* Write direct HTML here */}

            </Routes>
        </>
    )
}

export default LearnRoutes;