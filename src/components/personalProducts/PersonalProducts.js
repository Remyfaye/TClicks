

import './personalProducts.css'
import {useState} from 'react'

export default function PersonalProducts({toggle,product}){
    
    
    return(
        <div className='products'>
            <div className={`productWrapper${toggle}`}>
                
                <img  className={`personalProductImg${toggle}`} 
                src={product.photo}/>

                
               
            </div>
        </div>
    )
}