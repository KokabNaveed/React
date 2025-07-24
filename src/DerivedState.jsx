import { useState } from "react"

function Derived(){

    const [users,setusers]=useState([]);
    const [user,setuser]=useState('');

    const handleUser=()=>{
        setusers([...users,user]);
        console.log(users);
    }

    const total = users.length;
    const last = users[users.length-1];
    const unique = [...new Set(users)].length;

    return(
        <>
        <h2>Total User :{total}</h2>
        <h2>Total Unique User :{unique}</h2>
        <h2>Last User :{last}</h2>
        <input type="text" placeholder="Enter name" onChange={(event)=>setuser(event.target.value)} />
        <button onClick={handleUser}>Add User</button>

        {
            users.map((item,index)=>(
                <h2 key={index}>{item}</h2>
            ))
        }
        </>
    )
}

export default Derived;