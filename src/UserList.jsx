import { useEffect, useState } from "react";
import './Styles/API.css'

export default function UserList() {

    const [userData, setuserData] = useState([]);
    const [loading,setLoading]=useState(false);


    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    async function getUserData() {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        setuserData(response);
        setLoading(false);
    }

    return (
        <>
            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Email</li>
                <li>Age</li>
            </ul>

            {
                !loading?
                userData.map((user, index) => (
                    <ul key={index} className="user-list">
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <li>{user.age}</li>
                    </ul>
                ))
                : <h1>Data Loading...</h1>
            }

        </>
    )
}