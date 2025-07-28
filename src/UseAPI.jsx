import { Suspense, use } from "react";

const fetchData = () => fetch('http://localhost:3000/users/').then((reponse) => reponse.json()); // it returns a promise

const userResource = fetchData();

export default function UseAPI() {
    return (
        <div>
            <h1>Use API Hook</h1>
            <Suspense fallback={<p>Loading ....</p>}>
                <Users userResource={userResource} />
            </Suspense>
        </div>
    )
}

const Users = ({ userResource }) => {
    const userData = use(userResource);
    console.log(userData)
    return (
        <div>
            <h1>user List</h1>
            {
                userData?.map((user, index) => (

                <h3 key={index}>{user.name}</h3>

                ))
            }
        </div>
    )
}