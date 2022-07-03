
import Home from './pages/home/Home'
import Messages from './pages/messages/Messages'
import Personal from './pages/personal/Personal'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Tmart from './pages/tmart/Tmart'
import Explore from './pages/explore/Explore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    
      
      
    <BrowserRouter>
      <Routes>
        <Route path='/TClicks' element={<Login/>} />
        <Route path='home' element={<Home/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/personal' element={<Personal/>} />
        <Route path='/tmart' element={<Tmart/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
         
    
        
  </BrowserRouter>


           
   
  )
}

export default App;
