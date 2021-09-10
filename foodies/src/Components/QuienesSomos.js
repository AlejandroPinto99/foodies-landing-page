
import {AiOutlineArrowRight} from 'react-icons/ai'

const QuienesSomos = () => {
    return(
        <div className="relative mx-5 mt-8 md:mx-10">
            <h2 className="font-syne-bold mb-4">¿Quién es Foodie?</h2>
            <p className="text-sm text-gray-500 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                </p>
            <div className="flex flex-row justify-start items-center font-syne-bold mb-8 md:mt-12 ">
                <h3><a href="/#">Contáctanos</a></h3>
                <AiOutlineArrowRight className="w-10 "/>
            </div>

            <div className="w-6/12 mb-6 md:mt-24">
                <p className="font-druk-bold text-3xl">Estamos para ti</p>
            </div>
        </div>
    )
}

export default QuienesSomos;