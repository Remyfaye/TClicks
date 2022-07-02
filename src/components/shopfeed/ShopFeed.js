

import {ShopItems} from '../../ProductDisplay'
import './shopfeed.css'
import ShopListItems from './ShopListItems'

export default function ShopFeed(){
    return(
        <div>

            <div className='shopTop'>
                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/watch-4.jpg'/>
                            <span className='shopTopName'>Accessories</span>
                        </div>
                            
                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/sports-3.jpg'/>
                            <span className='shopTopName'>Sneakers</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/shorts-2.jpg'/>
                            <span className='shopTopName'>Shorts</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/shoe-2.jpg'/>
                            <span className='shopTopName'>Shoess</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/shirt-1.jpg'/>
                            <span className='shopTopName'>T-shirts</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/7.jpg'/>
                            <span className='shopTopName'>Female wears</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/jacket-5.jpg'/>
                            <span className='shopTopName'>male Wears</span>
                        </div>

                        <div className='shopTopItem'>
                            <img alt='' className='shopTopImg' src='assets/products/shampoo.jpg'/>
                            <span className='shopTopName'>Body Care</span>
                        </div>


            </div>

            <div className='shopBottom'>

                <div className='shopLeft'>
                    {ShopItems.map((s)=>(
                        <ShopListItems key={s.id} shopProduct={s}/>
                    ))}
                    
                </div>

                
            </div>
        </div>
    )
}