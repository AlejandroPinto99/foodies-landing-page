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


    return(
        <div className="md:flex md:flex-col lg:flex lg:flex-row items-center">
            <div className="md:w-full lg:w-6/12  ">
            {
                offices.length !== 0 ? (
                offices.map((office, key) => {
                    return(
                        <Card 
                            styleRule={`my-3 mx-3 pt-3 pb-4 pl-2 pr-4 ${!(selected === office.id) ? 'border border-black rounded-md big-white' : 
                            'border border-transparent bg-yellow-200'} transition duration-500 ease-in-out hover:border-yellow-100 
                            hover:bg-yellow-100 transform hover:-translate-y-1 hover:scale-100 `}
                            onClick={() => setSelected(office.id)}
                            key={key}
                            name={office.name}
                            schedule={`${office.opening_time} - ${office.closing_time}`} 
                            address={office.address}
                        />
                    )
                }) 
                ) : (
                    <div className="flex flex-row justify-center py-4 my-4 mt-10">
                        <img src={notFound} alt="not found" />
                    </div>
                )
            }
            </div>

            <div className="hidden mt-10 md:relative md:flex md:w-full 
            lg:flex lg:w-5/12 lg:ml-10 lg:absolute lg:right-0 lg:mr-0 xl:w-6/12 xl:ml-5 lg:mb-36" 
            style={{height: "70vh", width:"48%"}}>
                <Map element={element}/>
            </div>
        </div>
    )
}

export default OfficeList;