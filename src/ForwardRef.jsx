// this is for older version of react

// import { forwardRef } from "react";

// function Ref(props,ref) {
//     return (
//         <>
//             <input type="text" placeholder='Enter value' ref={ref} />

//         </>
//     )
// }

// export default forwardRef(Ref);

// for react 19 there is no forward ref it will work like that

function Ref(props){
    return(
        <>
        <input type="text" ref={props.ref} />
        </>
    )
}

export default Ref;