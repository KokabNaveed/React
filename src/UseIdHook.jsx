import { useId } from "react"

function IdHook() {


    const FormComponent = () => {

        const user = useId();
        // you can make multiple useid's (two separate for name and passowrd)
        return (
            <>
                <form action="">
                    <label htmlFor={user + 'name'}>Name: </label> <br />
                    <input type="text" id={user + 'name'} /> <br />
                    <label htmlFor={user + "password"}>Password: </label> <br />
                    <input type="password" id={user + "password"} /> <br />
                </form>
            </>
        )
    }
    return (
        <>
            <h3>UseID Hook</h3>
            <FormComponent />
            <hr />
            <FormComponent />

        </>
    )
}

export default IdHook;