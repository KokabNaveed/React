import { useState } from "react"

export default function ColorMixer() {

    const colors = JSON.parse(localStorage.getItem('color'))

    const [r,setR]=useState(colors && colors.r? colors.r : 0);
    const [g,setG]=useState(colors && colors.g? colors.g : 0);
    const [b,setB]=useState(colors && colors.b? colors.b : 0);

    const save=()=>{
        localStorage.setItem("color",JSON.stringify({r,g,b}))
    }

    return (
        <div>
            <h1>Color Mixer</h1>
            <div style={{ backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')', width: '200px', height: '200px' }}></div>
            <label htmlFor="">Red</label>
            <input type="range" onChange={(e)=>setR(e.target.value)} value={r} min={0} max={255} />
            <br /><br />
            <label htmlFor="">Green</label>
            <input type="range" onChange={(e)=>setG(e.target.value)} value={g} min={0} max={255} />
            <br /><br />
            <label htmlFor="">Blue</label>
            <input type="range" onChange={(e)=>setB(e.target.value)} value={b} min={0} max={255} />
            <br /><br />
            <button onClick={save}>Save Color Combination</button>
        </div>
    )
}