function Array() {
    const userData = [
        {
            name: 'KOKAB',
            age: '23',
            email: "kokab@text.com",
            id: 1
        },
        {
            name: "Hafsa",
            age: '24',
            email: "hafsa@test.com",
            id:2
        },
        {
            name: "Sabar",
            age: '21',
            email: "sabar@test.com",
            id:3
        },
        {
            name: "Fahad",
            age: '18',
            email: "fahad@test.com",
            id:4
        },
        {
            name: "Najeeb",
            age: '26',
            email: "najeeb@test.com",
            id:5
        }
    ]

    return (
        <>
            <h1>Array Data is </h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Array;