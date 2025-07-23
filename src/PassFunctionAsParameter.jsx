function PassFunction({displayname,name}){
    return(
        <>
        <button onClick={()=>displayname(name)}>Show Name</button>
        </>
    )
}

export default PassFunction;