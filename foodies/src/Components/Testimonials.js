import { useState } from 'react'

import { GrPrevious } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'
import { IconContext } from 'react-icons/lib';


const Testimonials = () => {

    const [show, setShow] = useState(0);


    const testimonials = [
        {
            "tittle": "El mejor lugar para degustar en familia y amigos!",
            "testimony": "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rapido y te atienden de la mejor manera."
        }, 
        {
            "tittle" : "Las hamburguesas mas ricas que he probado desde hace tiempo",
            "testimony": "Las hamburguesas son muy buenas, la carne es de sabrosa y de calidad, el pan es suave, y las variedades de queso son lo mejor"
        }, 
        {
            "tittle" : "El servicio es rapidisimo!",
            "testimony": "Pedimos la comida, y en menos de 10 minutos ya teniamos todos nuestras hamburguesas en la mesa"
        },
        {
            "tittle" : "Limpieza impecable",
            "testimony": "He visitado todos los establecimientos de Foodies, y en todos ellos la limpieza es milimetrica. La limpieza de las mesas es inmediata"
        },
        {
            "tittle" : "Idea para pasar a comer algo rico y economico!",
            "testimony": "El precio y la calidad de las hamburguesas van de la mano, es comida deliciosa, por un precio razonable"
        }
]

    return(
        <div>
            {
                testimonials.map((testimony, i) => {
                    return(
                        <div
                        key={i}
                        className={`${show === i ? 'visible' : 'hidden'}`}
                        >
                        <p className= "font-druk-bold text-xl mt-12 mb-3 px-5 text-center">
                            {testimony.tittle}
                        </p>
                            
                        <p className="text-gray-400 text-center px-2 leading-5 text-md">
                            {testimony.testimony}
                        </p>
                    </div>
                    )
                })
            }

            <div  className="text-center py-5 mb-10 flex flex-row items-center justify-center" >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm mx-2" fill="none" viewBox="0 0 24 24" 
                stroke={`${show === 0 ? 'currentColor' : '#FFD600'}`}
                onClick={() => `${show > 0 ? setShow(show - 1) : setShow(show)}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>

                <p className="font-syne-bold text-gray-500"> {show + 1} / {testimonials.length}</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm mx-2" fill="none" viewBox="0 0 24 24"
                    onClick={() => `${show <(testimonials.length - 1) ? setShow(show + 1) : setShow(show)}`}
                    stroke={`${show === (testimonials.length - 1) ? 'currentColor' : '#FFD600'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />      
                </svg>

            </div>
        </div>
    )
}

export default Testimonials