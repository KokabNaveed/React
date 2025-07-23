// USE transition is for elements without form
// while useStateForm is for form

import { useTransition } from "react"

function Transition(){
    const [pending,setTransition]=useTransition();

    const handleTransition=()=>{
        setTransition (async()=>{
            await new Promise(ref=>setTimeout(ref,2000));
        })
    }

    return(
        <>
        <button onClick={handleTransition} disabled={pending}>{pending? 'Submitting...': 'Submit'}</button>
        </>
    )
}

export default Transition;