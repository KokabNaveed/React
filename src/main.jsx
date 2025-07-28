import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import LearnAPI from './LearnAPI.jsx'
import Lazyloading from './LazyLoading.jsx'
import LearnRoutes from './LearnRoutes.jsx'
import ColorMixer from './ColorMixer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App/> */}
    {/* <LearnRoutes /> */}
    {/* <LearnAPI/>   */}
    {/* <Lazyloading/> */}
    <ColorMixer/>
  </BrowserRouter>
)