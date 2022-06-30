
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

export default function Feed(){
    

    const HomeFeed = () => {
        return(
            <div>

              
                    <Status />
                
               
                                
                {Posts.map((p) => (
                    <Post key={p.id} post = {p}/>
                ))}
            </div>
        )
       
                
    }

    const ProfileFeed = ()=>{
        return(
            <div>
                
            </div>
        )
    }

    const MobileFeed = () => {
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
    return(
        <div className='feed'>
            <div className='feedWrapper'>
                <MobileFeed/>
            
            </div>
        </div>
    )
}




