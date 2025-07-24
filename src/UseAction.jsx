import { useActionState } from "react"

function UseActionHook() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');

        await new Promise(res => setTimeout(res, 2000));
        // console.log("kokab",name,password)

        if (name && password) {
            return { message: "Data Submitted Successfully." ,name,password}
        }
        else
            return { error: "Please Fill all Fields" ,name,password}
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);

    return (
        <>
        <h3>UseAction Hook in React JS </h3>
            <form action={action}>
                <input type="text" placeholder="Enter Name" name="name" defaultValue={data?.name}/>
                <br /><br />
                <input type="password" placeholder="Enter Password" name="password" defaultValue={data?.password} />
                <br /><br />
                <button disabled={pending}>Submit</button>
            </form>
            <br /><br />
            {
                data?.error && <span style={{ color: 'Red' }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: 'Green' }}>{data?.message}</span>
            }
            <h3>Name : {data?.name}</h3>
            <h3>Password : {data?.password}</h3>
        </>
    )
}

export default UseActionHook;