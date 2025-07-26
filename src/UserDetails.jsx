import { useParams } from "react-router"
import { Link } from "react-router"

export default function UserDetails(){

    const userPerm = useParams()
    return(
        <div>
            <h1>The ID of the User is: {userPerm.id} </h1>
            <Link to='/user' >Back to users</Link>
        </div>
    )
}