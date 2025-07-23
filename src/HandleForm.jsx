import { useFormStatus } from "react-dom";

function HandleForm() {

    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("Hello");
    }

    function CustomerForm() {
        const {pending}=useFormStatus(); // new component with useFormStatus
        console.log(pending);

        return (
            <>
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <input type="password" placeholder="Enter Password" />
                <br /><br />
                <button disabled={pending}>{pending? 'Submitting...' : 'Submit'} </button>
            </>
        )
    }
    return (
        <>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </>
    )
}

export default HandleForm;