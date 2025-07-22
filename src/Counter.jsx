import { useState } from "react";
const Counter = () =>{
    const [counter,setcounter]=useState(0);
return(
    <>
    <h1>Count {counter}</h1>
    <button onClick={()=>setcounter(counter+1)}>Increase Count</button>
</>
)
}

export default Counter;