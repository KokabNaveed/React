import { useEffect, useState } from "react";

function Effect() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    // this will called once

    // useEffect(() => {
    //     callonce();
    // }, [])

    // this will called only when the provided state is called or clicked

    useEffect(() => {
        callonce();
    }, [counter])  // for probs pass prob

    function callonce() {
        console.log("CallOnce called once");
    }

    // callonce(); // this will called every time when the state updates
    return (
        <>
            <h2>UseEffect Hook</h2>
            <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
            <button onClick={() => setData(data + 1)}>Data: {data}</button>

        </>
    )
}

export default Effect;