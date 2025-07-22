import Student from './Student'
function College({ college }) {
    return (
        <>
            <div style={{
                backgroundColor: "white",
                color: "black",
                margin: "10px",
                border: "2px solid white",
                borderRadius: "20px"
            }}>
                <h3>Name: {college.name}</h3>
                <h3>City: {college.city}</h3>
                <h3>Web: {college.web}</h3>
            </div>
            <Student student={college.student}/>
        </>
    )
}

export default College;