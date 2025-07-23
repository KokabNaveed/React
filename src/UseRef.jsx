import { useRef } from "react";

function UseRef() {
    const inputref = useRef(0);

    const inputHandler = () => {
        inputref.current.focus();
        inputref.current.placeholder = 'Enter Password';
        inputref.current.value = '123';
        inputref.current.style.color = 'red'
    }

    const toggleHandler = () => {
        if (inputref.current.style.display != 'none')
            inputref.current.style.display = 'none';
        else
            inputref.current.style.display = 'inline';
    }

    return (
        <>
            <h3>Hello from useref</h3>
            <button onClick={toggleHandler}>Toggle Input Field</button>
            <input type="text" placeholder="Enter Your Name" ref={inputref} />
            <button onClick={inputHandler}>Focus on Input Field</button>
        </>
    )
}

export default UseRef;