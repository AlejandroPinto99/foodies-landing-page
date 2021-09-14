import { useEffect, useState } from 'react'

import Card from './Card'
import Map from './MapBox'

import notFound from '../../assets/icons/NotFound.svg'

const OfficeList = ({offices, found}) => {
    const [selected, setSelected] = useState();
    const [element, setElement] = useState();

    useEffect(() => {
        setElement(offices.find(element => element.id === selected))
    }, [selected])

    console.log(offices)

    return(
        <div className="md:flex md:flex-col lg:flex lg:flex-row items-center">
            <div className="md:w-full lg:w-6/12">
            {
                offices.length !== 0 ? (
                offices.map((office, key) => {
                    return(
                        <Card 
                            styleRule={`my-3 mx-3 pt-3 pb-4 pl-2 pr-4 ${!(selected === office.id) ? 'border border-black rounded-md big-white' : 
                            'border border-transparent bg-yellow-200'} `}
                            onClick={() => setSelected(office.id)}
                            key={key}
                            name={office.name}
                            schedule={`${office.opening_time} - ${office.closing_time}`} 
                            address={office.address}
                        />
                    )
                }) 
                ) : (
                    <div>
                        <img src={notFound} alt="not found" />
                    </div>
                )
            }
            </div>

            <div className="hidden mt-10 md:relative md:flex md:w-full 
            lg:flex lg:w-3/5 lg:ml-5 lg:mr-5 xl:w-3/5 xl:ml-5" 
            style={{height: "60vh"}}>
                <Map element={element}/>
            </div>
        </div>
    )
}

export default OfficeList;