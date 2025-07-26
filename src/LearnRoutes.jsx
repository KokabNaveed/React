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

function LearnRoutes() {
    return (
        <>
            {/* <NavBar /> */}

            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/university" element={<University2 />}>
                    <Route path="department1" element={<Department1 />} />
                    <Route path="detail" element={<Details />} />
                    <Route path="course" element={<Course />} />
                </Route>

                <Route path="/*" element={<Navigate to={"/login"} />} /> {/* Navigate to login page*/}

                {/* <Route path="/*" element={<PageNotFound/>} /> */} {/* Write new jsx page address */}

                {/* <Route path="/*" element={<h1>Page Not Found <br /> Error 404</h1>} /> */} { /* Write direct HTML here */}

            </Routes>
        </>
    )
}

export default LearnRoutes;