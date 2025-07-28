import { Routes, Route, NavLink } from 'react-router'
import './Styles/API.css'
import UserList from './UserList'
import UserAdd from './UserAdd'
import EditUser from './UserEdit'
import Login from './Login'
import UseReducerHook from './UseReducerHook'

export default function LearnAPI() {



    return (
        <>
            <h1>Fetch Data From API</h1>
            <ul className='list-button'>
                <li>
                    <NavLink to='/'>List</NavLink>
                </li>
                <li>
                    <NavLink to='/add'>Add New User</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/reducer'>Reducer</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='/add' element={<UserAdd />} />
                <Route path='/edit/:id' element={<EditUser />} />
                <Route path='/login' element={<Login />} />
                <Route path='/reducer' element={<UseReducerHook />} />
            </Routes>


        </>
    )
}