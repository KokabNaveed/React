import { use, useState } from "react"

function UpdateArray() {

    const [data, setdata] = useState([
        'Kokab', 'Hafsa', 'Sabar', 'Fahad', 'Najeeb'
    ])

    const [dataDetails, setDataDetails] = useState([
        { name: 'Kokab', age: '23' },
        { name: 'Hafsa', age: '24' }
    ])

    const handleData = (name) => {
        data[data.length - 1] = name;
        setdata([...data]);
    }
    const handleAge = (age) => {
        dataDetails[dataDetails.length - 1].age = age;
        setDataDetails([...dataDetails]);
    }

    return (
        <>
            <input type="text" placeholder="Enter Name for last user" onChange={(e) => handleData(e.target.value)} />
            {
                data.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))
            }

            <hr />

            <input type="text" placeholder="Enter Age for last user" onChange={(e) => handleAge(e.target.value)} />
            {
                dataDetails.map((item, index) => (
                    <h3 key={index}>{item.name},{item.age}</h3>
                ))
            }


        </>
    )
}

export default UpdateArray;