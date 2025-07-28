import { useState } from "react";
import './Styles/API.css';

function Login() {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();

    const [password, setpassword] = useState('');
    const [passwordErr, setpasswordErr] = useState();

    const handleName = (event) => {

        console.log(event.target.value);

        if (event.target.value.length > 5) {
            setNameErr('Please Enter valid username. 5 character are allowed')
        }
        else {
            setNameErr();
        }
    }

    const handlePassword = (event) => {

        let regex = /^[A-Z0-9]+$/i;

        if (!(regex.test(event.target.value))) {
            setpasswordErr('Please Enter valid Password. Only character and numbers are allowed')

        }
        else {
            setpasswordErr();
        }
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login Page</h1>
            <input type="text" className={nameErr ? 'error' : ''} onChange={handleName} placeholder="Enter Name" />
            <br />
            <span className="red-color">{nameErr && nameErr}</span>
            <br />
            <input type="text" className={passwordErr ? 'error' : ''} onChange={handlePassword} placeholder="Enter Password" />
            <br />
            <span className="red-color">{passwordErr && passwordErr}</span>
            <br />
            <button disabled={nameErr || passwordErr}>Login</button>
        </div>

    )
}

export default Login;