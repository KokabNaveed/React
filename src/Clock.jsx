import { useEffect, useState } from "react";

function Clock({color}){

    const [time,setTime]=useState();
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString()); // this will showw time
            // setTime(new Date().toLocaleDateString()); // this will show date
        },1000)
    },[])
    return(
        <>
        <h1>Clock Time</h1>
        <h3 style={{color:color,backgroundColor:"white",padding:"20px", width:"150px", border:"2px solid",borderRadius:"20px"}}>{time}</h3>
        </>
    )
}

export default Clock;