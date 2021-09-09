import { useState } from 'react'

const Card = ({id, name, schedule, address, onClick, styleRule}) => {
    


    return (
    <div onClick={onClick}> 
        <div className={styleRule}>
         <h4 className="font-syne-bold">{name}</h4>
            <div className="text-xs mt-2 font-semibold">
                <p>{schedule}</p>
                <p>{address}</p>
            </div>
         </div>
      
    </div>
    )
}

export default Card;