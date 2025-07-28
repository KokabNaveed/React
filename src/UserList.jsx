import { useEffect, useState } from "react";
import './Styles/API.css'
import { useNavigate } from "react-router";

export default function UserList() {

    const [userData, setuserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();
    const url = "http://localhost:3000/users";


    useEffect(() => {
        getUserData(); setLoading(true);

    }, [])

    async function getUserData() {
        let response = await fetch(url);
        response = await response.json();
        setuserData(response);
        setLoading(false);
    }

    const deleteuser = async (id) => {
        let response = await fetch(url + '/' + id, {
            method: 'delete'
        });
        response = await response.json();
        if (response) {
            alert("Data Deleted")
            getUserData();
        }
    }

    const edituser =(id)=>{
        navigate('/edit/'+id);
    }


    return (
        <>
            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Email</li>
                <li>Age</li>
                <li>Action</li>
            </ul>

            {
                !loading ?
                    userData.map((user, index) => (
                        <ul key={index} className="user-list">
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.age}</li>
                            <li>
                                <button onClick={() => deleteuser(user.id)}>Delete</button>
                                <button onClick={() => edituser(user.id)}>Edit</button>

                            </li>
                        </ul>
                    ))
                    : <h1>Data Loading...</h1>
            }

        </>
    )
}