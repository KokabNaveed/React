import Department from "./Department";

function University(){
    return(
        <div style={{background:'White', padding: '20px',color:'black'}}>
        <h1>University Component</h1>
        <Department/>
        </div>
    )
}

export default University;