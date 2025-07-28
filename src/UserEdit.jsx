import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditUser() {

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate= useNavigate();

    const { id } = useParams();
    const url = "http://localhost:3000/users/" + id;


    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {

        let response = await fetch(url);
        response = await response.json();

        setname(response.name);
        setEmail(response.email);
        setAge(response.age);

    }

    const updateuserData = async() => {
        let response = await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,email,age})
        })

        response= await response.json();

        if (response){
            alert("User Data Updated");
            navigate('/');
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Edit User Details</h1>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name" />
            <br /> <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <br /> <br />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
            <br /> <br />ٖ
            <button onClick={updateuserData}>Update User</button>
        </div>
    )
}

export default EditUser;