import StudentComponent from "./StudentNew";

function Department(){
    return(
        <div style={{background:'Gray', padding: '20px',color:'black'}} >
        <h1>Department Component</h1>
        <StudentComponent/>
        </div>
    )
}

export default Department;