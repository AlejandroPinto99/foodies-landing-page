import { useState, useEffect } from 'react'

import OfficesList from './OfficesList'

import truck from '../../assets/icons/food.svg'
import food from '../../assets/icons/truck.svg'
import { BsSearch } from 'react-icons/bs'
import { GrPrevious } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'

const BranchOffices = () => {
    const [type, setType] = useState('takeaway')
    const [officeList, setOfficeList] = useState([]);

    async function requestOffice() {

        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/locations?type=${type}` 
            );

            const json = await res.json();

            console.log(json.data)

            setOfficeList(json.data);
   
            
        } catch(e) {  //Managing any error
            alert(e.message);
       }
        
    }

    useEffect(() => {
        requestOffice();
    }, [type])

    const changeType = (t) => {
        setType(t);
    }

    
    return(
        <div>
            <div className="flex flex-row justify-center border border-gray-300 ">

                <button className={`flex flex-row justify-center w-6/12 font-syne-bold 
                border border-black text-sm py-3 
                ${(type === `takeaway`) ? 'text-white bg-black':
                'text-black bg-white'}`}
                onClick={() => changeType('takeaway')}
                >
                    <img src={food} alt="para llevar" className={`mx-2 ${(type === `takeaway`) ? ' fill-current text-white':
                    'fill-current text-black'}`}/>
                    Para llevar

                </button>

                <button className={`flex flex-row justify-center items-center 
                w-6/12 font-syne-bold text-sm py-2 ${(type === `delivery`) ? 'text-white bg-black':
                'text-black bg-white'}`}
                onClick={() => changeType('delivery')}
                >
                    <img src={truck} alt="a domicilio" className={`mx-2 fill-current ${(type === `delivery`) ? ' text-white':
                    'text-black'}`}/>
                    Domicilio
                    
                </button>
            </div>

            <div className="flex flex-row-reverse justify-end items-center border border-gray-300 ">
                <input placeholder="Buscar nombre o dirección" className="relative py-3 w-5/6 text-md"/>
                <BsSearch className="text-2xl w-1/6"/>
            </div>

            <div>
                <OfficesList offices={officeList} />
            </div>

            <div>
                <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center">
                    "El mejor lugar para degustar en familia y amigos!"
                </p>
                
                <p className="text-gray-400 text-center px-2 leading-5 text-md">
                    Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rapido
                    y te atienden de la mejor manera.
                </p>
            </div>
            <div className="text-center py-5 flex flex-row items-center justify-center" >
                <GrPrevious className="text-sm mx-2"/>
                <p className="font-syne-bold text-gray-500">1 / 5</p>
                <GrNext className="text-sm mx-2 " />
            </div>
        </div>
    )
    
}
export default BranchOffices