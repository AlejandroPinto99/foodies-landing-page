import { GrPrevious } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'


const Feedback = () => {
    return(
        <div>
            <div>
                <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center">
                    "El mejor lugar para degustar en familia y amigos!"
                </p>
                    
                 <p className="text-gray-400 text-center px-2 leading-5 text-md">
                     Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rapido
                    y te atienden de la mejor manera.
                </p>
            </div>
            <div className="text-center py-5 mb-10 flex flex-row items-center justify-center" >
                 <GrPrevious className="text-sm mx-2"/>
                <p className="font-syne-bold text-gray-500">1 / 5</p>
                <GrNext className="text-sm mx-2 " />
            </div>
        </div>
    )
}

export default Feedback