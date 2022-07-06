
import Home from './pages/home/Home'
import Messages from './pages/messages/Messages'
import Personal from './pages/personal/Personal'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Tmart from './pages/tmart/Tmart'
import Explore from './pages/explore/Explore'
import {people} from './People';
import ChatScreen from './pages/messages/ChatScreen';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import PersonIcon from '@mui/icons-material/Person';

function App() {

  const [btnLinkState,setBtnLinkstate] = useState(false)
   

    function toggleChatScreen(){
        setBtnLinkstate(btnLinkState => true)
    }

    let personLink = people.map((p)=>{
      return(p.link)
   })

    let toggleChatLink = btnLinkState ? personLink : '/chat'
  return (
    
      
      
    <BrowserRouter>
      <Routes>
        <Route path='/TClicks' element={<Login/>} />
        <Route path='home' element={<Home/>} />
        <Route path='/chats' element={<Messages/>} />
        <Route path='/personal' element={<Personal/>} />
        <Route path='/tmart' element={<Tmart/>} />
        <Route path='/explore' element={<Explore/>} />
        {people.map((p)=>(

<Route path={p.link} element={<ChatScreen/>} />

))}
      </Routes>
         
    
        
  </BrowserRouter>


           
   
  )
}

export default App;
