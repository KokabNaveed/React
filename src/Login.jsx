import { useActionState, useState } from "react";
import './Styles/API.css';

function Login() {

    // this all is for simple validation

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

    // this all is for useActionState Hook validation

    const handleLogin = (prevData, formData) => {

        let name = formData.get('name');
        let password = formData.get('password');

        let regex = /^[A-Z0-9]+$/i;


        if (!name || name.length > 5) {
            return { error: 'Please Enter valid username. 5 character are allowed' ,name,password}
        } else if (!password || !regex.test(password)) {
            return { error: 'Please Enter valid Password. Only character and numbers are allowed',name,password }
        }
        else {
            return { message: 'Login Successfully',name,password }
        }
    }

    const [data, action, pending] = useActionState(handleLogin)


    return (
        <div style={{ textAlign: 'center' }}>

            <div>
                <h2>Simple Validation Login Page</h2>
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

            <div>
                <h2>Validation With UseActionState</h2>
                {
                    data?.message && <span style={{color:'green'}}> {data?.message} </span>
                }

                {
                    data?.error && <span style={{color:'red'}}> {data?.error} </span>
                }

                <form action={action}>
                    <input type="text" defaultValue={data?.name} name="name" placeholder="Enter Name" />
                    <br /><br />
                    <input type="text" defaultValue={data?.password} name="password" placeholder="Enter Password" />
                    <br /><br />
                    <button>Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login;