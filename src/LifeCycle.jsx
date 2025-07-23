import { useEffect } from "react";

function LifeCycle({ count }) {

    useEffect(() => {
        console.log("Mounting Face")
    }, [])

    useEffect(() => {
        console.log("Updating Face")
    }, [count])

    useEffect(() => {
        return () => {
            console.log("Unmounting Face")
        }
    }, [])

    return (
        <>
            <h1>Count is {count}</h1>
        </>
    )
}

export default LifeCycle;