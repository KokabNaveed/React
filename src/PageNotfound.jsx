import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <div style={{textAlign:'center'}}>
            <h1>Page Not Found</h1>
            <h2>ERROR 404</h2>
            <Link to='/'>Go To Home Page</Link>
        </div>
    )
}