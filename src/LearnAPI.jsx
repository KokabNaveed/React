import { useEffect, useState } from "react";
import './Styles/API.css'

export default function LearnAPI() {

    const [userData, setuserData] = useState([]);


    useEffect(() => {
        getUserData();
    }, [])

    async function getUserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        setuserData(response.users);
    }

    return (
        <>
            <h1>Fetch Data From API</h1>
            <ul className="user-list user-list-head">
                <li>FirstName</li>
                <li>LastName</li>
                <li>Age</li>
            </ul>

            {
                userData.map((user, index) => (
                    <ul key={index} className="user-list">
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>
                ))
            }

        </>
    )
}