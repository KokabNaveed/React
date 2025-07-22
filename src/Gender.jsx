import { useState } from "react";

function Gender() {

    const [gender,setGender]=useState("female")
    const [city,setCity]=useState('Islamabad')

    return (
        <>
            <h1>Radio Button</h1>
            <h3>Select Gender</h3>

            <input type="Radio" checked={gender=='male'} onChange={(event)=>setGender(event.target.value)} value={"male"} name="gender" id="male" />
            <label htmlFor="male">Male</label>

            <input type="Radio"checked={gender=='female'} onChange={(event)=>setGender(event.target.value)} value={"female"} name="gender" id="female" />
            <label htmlFor="female">Female</label>

            <h1>Selected Gender: {gender}</h1>

            <h3>Select or DropDown</h3>

            <h3>Select your city</h3>

            <select onChange={(event)=>setCity(event.target.value)} defaultValue={'islamabad'}>
                <option value="Lahore" id="lahore">Lahore</option>
                <option value="Karachi" id="karachi"> Karachi</option>
                <option value="Islamabad" id="islamabad">Islamabad</option>
            </select>

            <h3>Selected City : {city}</h3>
        </>
    )
}

export default Gender;