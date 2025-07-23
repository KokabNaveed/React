import { useRef } from "react";

function UnControlled() {

    const userRef =useRef (null);
    const passRef =useRef(null);

    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector("#name").value;
        const password=document.getElementById("password").value;
        console.log(user, password);
    }

    const handleFormRef=(event)=>{
        event.preventDefault();
        const user = userRef.current.value;
        const pass = passRef.current.value;
        console.log(user, pass);

    }
    return (
        <>
            <h3>Form Handle with DOM</h3>
            <form action="" onSubmit={handleForm}>
                <input type="text" placeholder="Enter Name" id="name" />
                <br /><br />
                <input type="password" placeholder="Enter Password" id="password" />
                <br /><br />
                <button> Submit</button>
            </form>

            <hr /><hr />

            <h3>Form Handle with UseRef</h3>
            <form action="" onSubmit={handleFormRef}>
                <input type="text" placeholder="Enter Name" ref={userRef} />
                <br /><br />
                <input type="password" placeholder="Enter Password" ref={passRef} />
                <br /><br />
                <button> Submit</button>
            </form>
        </>
    )
}

export default UnControlled;