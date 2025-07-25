import useToggle from "./useToggle";

function CustomHook() {

    const [value, setToggle] = useToggle(true);
    const [data,setData] = useToggle(true);
    return (
        <>
            {value ? <h3>Learn Custom Hook In React</h3> : null}
            <button onClick={setToggle}>Toggle</button>
            <button onClick={() => setToggle(false)}>Hide</button>
            <button onClick={() => setToggle(true)}>Show</button>
            <hr />
            {data ? <h3>Second Use of Custom Hook</h3> : null}
            <button onClick={setData}>Toggle</button>
            <button onClick={() => setData(false)}>Hide</button>
            <button onClick={() => setData(true)}>Show</button>
        </>
    )
}

export default CustomHook;