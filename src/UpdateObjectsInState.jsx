import { useState } from "react"

function ObjectsInState() {

    const [data, setData] = useState({
        name: 'Kokab',
        Address: {
            city: 'Kasur',
            Country: 'Pakistan'
        }
    })
    // for single object
    const handlename = (val) => {
        data.name = val;
        setData({ ...data });
    }

    // for nested object

    const handleCity = (val) => {
        data.Address.city = val;
        setData({ ...data,address:{...data.Address.city} });
    }

    const handleCountry=(val)=>{
        data.Address.Country=val;
        setData({...data,address:{...data.Address.Country}})
    }

    return (
        <>
            <input type="text" placeholder="Enter Name" onChange={(event) => handlename(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Enter City" onChange={(event) => handleCity(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Enter Country" onChange={(event)=>handleCountry(event.target.value)} />

            <h3>Name :{data.name}</h3>
            <h3>City: {data.Address.city}</h3>
            <h3>Country: {data.Address.Country}</h3>
        </>
    )
}

export default ObjectsInState;