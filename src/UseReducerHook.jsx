import { useReducer } from "react"

const emptyData = {
    name: '',
    password: '',
    email: '',
    city: '',
    address: ''
}

const reducer = (data, action) => {
    return { ...data, [action.type]: action.val }
}

export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, emptyData); // useReducer is an alternate od use state ..here we have to define usestates for all 5 input fields but with reducer it's done in one line

    return (
        <div>
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'name' })} placeholder="Enter Name" />
            <br /><br />
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'password' })} placeholder="Enter Password" />
            <br /><br />
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'email' })} placeholder="Enter Email" />
            <br /><br />
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'city' })} placeholder="Enter City" />
            <br /><br />
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'address' })} placeholder="Enter Address" />
            <br /><br />

            <ul>
                <li>Name : {state.name}</li>
                <li>Password : {state.password}</li>
                <li>Email : {state.email}</li>
                <li>City : {state.city}</li>
                <li>Address : {state.address}</li>

            </ul>
            <button>Add Details</button>
        </div>
    )
}