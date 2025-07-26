import { useContext } from "react";
import { SubjectContext } from "./Context";

function Subject(){
    const subject = useContext(SubjectContext)
    return(
        <div style={{background:'orange', padding: '20px',color:'black'}}>
        <h1>Subject Component</h1>
        <h3>Subject is: {subject}</h3>
        </div>
    )
}

export default Subject;