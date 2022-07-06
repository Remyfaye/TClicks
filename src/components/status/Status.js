

import './status.css'

import image2 from '../../assets/persons/2.jpeg'
import image3 from '../../assets/persons/3.jpeg'
import image4 from '../../assets/persons/4.jpeg'
import image5 from '../../assets/persons/5.jpeg'
import image6 from '../../assets/persons/6.jpeg'
import image7 from '../../assets/persons/7.jpeg'
import image8 from '../../assets/persons/8.jpeg'

export default function Status(){
    return(
        <div className='status'>
            <div className='statusWrapper'>
                <div className='statusList'>

                    <div className='statusListItem'>
                        <img alt='' src={image2}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>

                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image3}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>

                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image4}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>

                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image5}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>
                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image6}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>
                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image7}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>
                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image2}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>
                    </div>

                    <div className='statusListItem'>
                        <img alt='' src={image3}
                        className='statusImg'/>
                        <span className='statusGreenDot'></span>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}








