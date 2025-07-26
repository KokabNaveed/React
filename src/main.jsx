// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './Styles/index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import LearnAPI from './LearnAPI.jsx'
// import LearnRoutes from './LearnRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App/> */}
    {/* <LearnRoutes /> */}
    <LearnAPI/>  
  </BrowserRouter>
)