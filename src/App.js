
import Home from './pages/home/Home'
import Personal from './pages/personal/Personal'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    
      
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/personal' element={<Personal/>} />
      </Routes>
         
          
          
       
        
  </BrowserRouter>

           
   
  )
}

export default App;
