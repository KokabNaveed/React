import { Link } from "react-router"

export default function Users() {

    const UserList = [
        { id: 1, name: 'Najeeb' },
        { id: 2, name: 'Hafsa' },
        { id: 3, name: 'Kokab' },
        { id: 4, name: 'Sabar' },
        { id: 5, name: 'Fahad' },
        { id: 6, name: 'Bushra' },
        { id: 7, name: 'Naveed' },
    ]

    return (
        <div style={{ marginLeft: '20px' }}>
            <h2>The users with ID are:</h2>
            <br />
            {
                UserList.map((item, index) => (
                    <div key={index}><Link to={'/userdetail/' + item.id}><h3>{item.name}</h3></Link> </div>
                ))
            }
            <h2>The users with ID and Name are:</h2>
            <br />
            {
                UserList.map((item, index) => (
                    <div key={index}><Link to={'/userdetail/' + item.id+'/'+item.name}><h3>{item.name}</h3></Link> </div>
                ))
            }
        </div>
    )
}