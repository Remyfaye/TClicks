
import { PersonalProductsData } from '../../personalProductsData'
import './personalProducts.css'
import {useState} from 'react'



export default function PersonalProducts({toggle,product}){
    
    
    return(
        <div>
            
            {PersonalProductsData.map(product =>(
                    <div className='products'>
                        <div className={`productWrapper${toggle}`}>



                            <img  className={`personalProductImg${toggle}`} 
                        src={product.photo}/>
                        </div>
                    </div>
            ))}
                
               

                
               
            
        </div>
        
        
    )
}