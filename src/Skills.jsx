import { useState } from "react"

function Skills() {
    const [skill,setskill]=useState([]);

    const handleSkill =(event)=>{
        if(event.target.checked){
            setskill([...skill,event.target.value]); // (... is a spread operator) 
        }
        else{
            setskill([...skill.filter((item)=>item!=event.target.value)]);
        }
        
    }
    return (
        // handling checkbox 
        <>
        
        <h1>Select your skills</h1>
            <input onChange={handleSkill} type="checkbox" value='Php' id="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />

            <input onChange={handleSkill} type="checkbox" value='java' id="Java" />
            <label htmlFor="Java">Java</label>
            <br />
            <br />

            <input onChange={handleSkill} type="checkbox" value='Node' id="Node" />
            <label htmlFor="Node">Node</label>
            <br />
            <br />

            <input onChange={handleSkill} type="checkbox" value='Js' id="JS" />
            <label htmlFor="JS">JS</label>
            <br />
            <br />

            <h1>{skill.toString()}</h1>

        </>
    )
}

export default Skills;