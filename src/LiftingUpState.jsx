import { useState } from "react"

function AddUser({adduser}){
    // const [user,setuser]=useState(''); // adding this in parent component for lifting up state

    return (
        <>
        <input type="text" placeholder=" Add User" onChange={(event)=>adduser(event.target.value)} />
        <button>Add User</button>
        </>
    )
}


export default AddUser;