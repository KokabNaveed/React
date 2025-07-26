import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotfound";

function LearnRoutes() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Navigate to={"/login"} />} /> {/* Navigate to login page*/}

                {/* <Route path="/*" element={<PageNotFound/>} /> */} {/* Write new jsx page address */}

                {/* <Route path="/*" element={<h1>Page Not Found <br /> Error 404</h1>} /> */} { /* Write direct HTML here */}

            </Routes>
        </>
    )
}

export default LearnRoutes;