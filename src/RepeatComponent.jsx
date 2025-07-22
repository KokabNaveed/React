function Repeat({ user }) {
    return (
        <>
            <div style={{
                border: "1px solid green",
                borderRadius:"20px",
                margin:"20px",
                backgroundColor:"White",
                color:"black"

            }}>
                <h4>ID: {user.id}</h4>
                <h4>Name: {user.name}</h4>
                <h4>Age: {user.age}</h4>
                <h4>Email: {user.email}</h4>
            </div>
        </>
    )
}

export default Repeat;