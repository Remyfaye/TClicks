
import './feed.css'
import Share from '../share/Share'
import {useState} from 'react'

//----------------home page-----------------
import Post from '../post/Post'
import {Posts} from '../../dummyData'
import {ContactedData} from '../../contactedList'
import { useMediaQuery } from '@mui/material'
import Status from '../status/Status'


//---------------------personal page---------------------------- 
//personal page icons

import ListIcon from '@mui/icons-material/List';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SendIcon from '@mui/icons-material/Send';
import AppsIcon from '@mui/icons-material/Apps';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

//personal page Allposts
import PersonalPosts from '../personalPosts/PersonalPosts'

//personal page products
import {PersonalProductsData} from '../../personalProductsData'
import PersonalProducts from '../personalProducts/PersonalProducts'
import Home from '../../pages/home/Home'

//--------------------------------mart page-------------------------
//shop page icons
/*import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import RollerSkatingRoundedIcon from '@mui/icons-material/RollerSkatingRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';*/
import ShopFeed from '../shopfeed/ShopFeed'

//---------------------------explore page-------------------
import ExploreFeed from '../explorefeed/ExploreFeed'

//---------------------------explore page-------------------
import MessageFeed from '../messagefeed/MessageFeed'


export default function Feed({personal,stoggle,home,tmart,explore,messages}){
    

    const HomeFeed = () => {
        return(
            <div>

                    <Share tol={stoggle}/>
                    <Status />
                    
               
                                
                {Posts.map((p) => (
                    <Post key={p.id} post = {p}/>
                ))}
            </div>
        )
       
                
    }

    const MartFeed = ()=>{
        return(
            <div className='shop'>
                <div className='shopWrapper'>

                   <ShopFeed/>

                    
                </div>
            </div>
        )
    }

    const ExFeed = ()=>{
        return(
            <div className='explore'>
                <div className='exploreWrapper'>

                   <ExploreFeed/>

                    
                </div>
            </div>
        )
    }

    const MessagesFeed = ()=>{
        
        return(
            <div className='explore'>
                <div className='exploreWrapper'>
                    
                   <MessageFeed />

                    
                </div>
            </div>
        )
    }

    const PersonalFeed = () => {
        const [btnProductState, setBtnProductState] = useState(false)
        const [btnPostState, setBtnPostState] = useState(false)


        function revealProducts(){
            setBtnProductState(btnPrductState => !btnPrductState)           
            setBtnPostState(btnPostState => !btnPostState) 

  

        }
        let postToggle = btnPostState ? ' active' : ''
        let productToggle = btnProductState ? ' active' : ' '
        return(
            <div className='personal'>
                <div className='personalWrapper'>

                    <div className='personalTop'>

                        <div className='personalTopLeft'>

                            <div className='personalDisplay'>
                                <img alt='' 
                                src='assets/persons/1.jpeg'
                                className='personalImg'/>
                                <span className='personalName'>
                                    Sarah Jenkins
                                </span>
                            </div>

                            

                           {/*<div className='personalBio'>
                                <ul className='personalBioList'>
                                    <li className='personalBioListItem'>Music Lover</li>
                                    <li className='personalBioListItem'>student at CalTech</li>
                                    <li className='personalBioListItem'>Pices</li>
                                    <li className='personalBioListItem'>Food!!!!</li>
                                </ul>
        </div>*/}
                        </div>

                        <div className='personalTopRight'>
                            <div className='folllowingDetails'>
                                <span className='followingNo'>20</span>
                                <h3 className='followingDetail'>Post</h3>
                            </div>

                            <div className='folllowingDetails'>
                                <span className='followingNo'>2103</span>
                                <h3 className='followingDetail'>Following</h3>
                            </div>

                            <div className='folllowingDetails'>
                                <span className='followingNo'>4763</span>
                                <h3 className='followingDetail'>Followers</h3>
                            </div>
                        </div>
                    </div>

                    <div className='personalCenter'>
                        
                        <AppsIcon 
                        onClick={revealProducts}
                        className='personalCenterList'/>
                        <AddBusinessIcon 
                        className='personalCenterList'
                        onClick={revealProducts}/>
                            
                        <BookmarkAddedIcon className='personalCenterList'/>
                        
                    </div>

                    <hr></hr>

                    <div className='personalBottom'>

                        

                        
                            {Posts.map((p) => (
                                <PersonalPosts 
                                key={p.id} 
                                 post = {p}
                                 toggle ={postToggle}
                                className='bottomPost'/>
                            ))}
                           

                            
                            {PersonalProductsData.map((r)=>(
                                 <PersonalProducts 
                                 
                                 toggle ={productToggle}
                                 key = {r.id}
                                 product={r}/>
                            ))}
                            
                               
                                
                                
                           
                           
                        
                        
                       
                        
                       

                    </div>

                </div>
            </div>
        )
    }

    const DisplayFeed = ()=>{
        if(home){
            return(<HomeFeed/>)
            
        }
        else if(personal){
            return(<PersonalFeed/>)
        }
        else if(explore){
            return(<ExFeed/>)
        }
        else if(tmart){
            return(<MartFeed/>)
        }
        else if(messages){
            return(<MessagesFeed/>)
        }
        else{
            return(<Home/>)
        }
        
    }
    return(
        
        <div className='feed'>
            <div className='feedWrapper'>
            <DisplayFeed/>
            
            </div>
        </div>
    )
}




