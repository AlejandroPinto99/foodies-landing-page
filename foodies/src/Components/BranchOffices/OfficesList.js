import { useState } from 'react'

import Card from './Card'

const OfficeList = ({offices}) => {
    const [selected, setSelected] = useState();


    return(
        <div>
            {
                offices ? (
                offices.map((office, key) => {
                    return(
                        <Card 
                            styleRule={`my-3 mx-3 pt-3 pb-4 pl-2 pr-4 ${!(selected === office.id) ? 'border border-black rounded-md big-white' : 
                            'border border-transparent bg-yellow-200'} `}
                            onClick={() => setSelected(office.id)}
                            key={key}
                            id={office.id}
                            name={office.name}
                            schedule={`${office.opening_time} - ${office.closing_time}`} 
                            address={office.address}
                        />
                    )
                }) 
                ) : null
            }
        </div>
    )
}

export default OfficeList;