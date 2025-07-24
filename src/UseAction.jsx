import { useActionState } from "react"

function UseActionHook() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');

        await new Promise(res => setTimeout(res, 2000));
        // console.log("kokab",name,password)

        if (name && password) {
            return { message: "Data Submitted Successfully." }
        }
        else
            return { error: "Please Fill all Fields" }
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);

    return (
        <>
            <form action={action}>
                <input type="text" placeholder="Enter Name" name="name" />
                <br /><br />
                <input type="password" placeholder="Enter Password" name="password" />
                <br /><br />
                <button disabled={pending}>Submit</button>
                <br /><br />
                {
                    data?.error && <span style={{ color: 'Red' }}>{data?.error}</span>
                }
                {
                    data?.message && <span style={{ color: 'Green' }}>{data?.message}</span>
                }
            </form>

        </>
    )
}

export default UseActionHook;