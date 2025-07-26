import { useParams } from "react-router"
import { Link } from "react-router"

export default function UserDetails() {

    const userPerm = useParams()
    return (
        <div>
            <h1>The ID of the User is: {userPerm.id} </h1>
            {userPerm.name ? <h1>Name is: {userPerm.name}</h1> : null}
            <Link to='/user' >Back to users</Link>
        </div>
    )
}