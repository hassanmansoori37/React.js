import { useState } from 'react';
import offbulb from '../assets/offbulb.jpg';
import onbulb from '../assets/onbulb.jpg'

const ToggleState = () => {
    let [isON , setisON] = useState(false);

    let toggle = () => {
        setisON((prev) => !prev);
        // setisON(!isON)

        console.log('isON' , isON);
        
    }
    return(
        <div>
            <h2>Toggle State</h2>
            <h3>ON OFF Bulb</h3>


           {/* {
            isON ? (
            <img src={onbulb} alt="" style={{width:200}} />
              ) :  (
            <img src={offbulb} alt="" style={{width:200}} />
         
              )

            } */}

            <img src={isON ? onbulb : offbulb} alt="" style={{width:200}} />

               <button onClick={toggle}>Switch</button>
        </div>
    )
}

export default ToggleState;