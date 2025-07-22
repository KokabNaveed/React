import { useState } from "react";

function State(){
    
const [fruit,setFruit]=useState("Apple");

const handleFruit =(name)=>{
    setFruit(name);
}

    return(
        <>
        <h1>{fruit}</h1>
        <button onClick={()=>handleFruit("Banana")}>Change Fruit</button>
        </>
    )
}

export default State;