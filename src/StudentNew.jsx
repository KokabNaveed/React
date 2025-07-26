import { useContext } from "react";
import Subject from "./Subject";
import { SubjectContext } from "./Context";

function StudentComponent(){
    const subject = useContext(SubjectContext); // you can access context API in every component
    return(
        <div style={{background:'Pink', padding: '20px',color:'black'}}>
        <h1>Student Component {subject}</h1>
        <Subject/>
        </div>
    )
}

export default StudentComponent;