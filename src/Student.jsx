function Student({student}){
    return(
        <>
        {
            student.map((student)=>(
                <div style={{
                backgroundColor: "white",
                color: "purple",
                margin: "10px",
                border: "2px solid white",
                borderRadius: "20px"}}>
                    <h3>Name: {student.name}</h3>
                    <h3>Age: {student.age}</h3>
                    <h3>Email:{student.email}</h3>
                </div>
            ))
        }
        </>
    )
}

export default Student;