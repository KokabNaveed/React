import { useState } from "react"

export default function UserAdd() {
    
    const [name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[age,setAge]=useState('');

    const saveUser=async()=>{
        console.log(name,age,email);
        const url ="http://localhost:3000/users";
        let response = await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,email,age})
        });

        response=await response.json();
        if(response)
            alert("New user Added")

    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>Add New User</h1>
            <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" />
            <br /><br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <br /><br />
            <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
            <br /><br />
            <button onClick={saveUser}>Add User</button>

        </div>
    )
} 