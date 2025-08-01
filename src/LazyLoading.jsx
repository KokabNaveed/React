import { lazy, Suspense, useState } from "react"
import UseAPI from "./UseAPI";
// import App from "./App";

const App = lazy(()=>import('./App'));

export default function Lazyloading() {

    const [load, setload] = useState(false);

    return (
        <div>
            <h1>Lazy Loading</h1>

            <button onClick={() => setload(!load)}>Load App.jsx</button>

            {
                load ? <Suspense fallback={<h1>Loading...</h1>}> <App /> </Suspense> : null
            }

            {/* {
                load ? <App /> : null
            } */}

            <UseAPI/>

        </div>
    )
}