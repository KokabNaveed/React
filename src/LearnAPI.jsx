import { Routes, Route, NavLink } from 'react-router'
import './Styles/API.css'
import UserList from './UserList'
import UserAdd from './UserAdd'
import EditUser from './UserEdit'

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
            </ul>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='/add' element={<UserAdd />} />
                <Route path='/edit/:id' element={<EditUser />} />

            </Routes>


        </> 
    )
}