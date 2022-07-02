

import './shopfeed.css'


export default function ShopListItems({shopProduct}){
    return(
        <div>
  
            

            <div className="shopListItem">
                
                <div className='shopItemOwner'>
                    <img alt=''
                    className='ownerImage'
                    src={shopProduct.person}/>
                    <span className='ownerName'>{shopProduct.userName}</span>
                </div>

                <img alt='' 
                className='shopImg' 
                src={shopProduct.photo}/>

                <div className='productInfo'>
                    <span className='shopDesc'>{shopProduct.desc}</span>
                    <span className='shopPrice'><b>{shopProduct.price}</b></span>
                </div>

                <div className='addBuyOption'>
                            <button className='addBuyBtn'>Add To cart</button>
                            <button className='addBuyBtn'>Buy</button>
                        
                </div>
                   
            </div>
             
            
        </div>
    )
}