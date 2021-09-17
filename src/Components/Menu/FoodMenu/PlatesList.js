import Plate from './Plate'
import FoodNF from '../../../assets/images/FoodNotFound.svg'

const PlatesList = ({plates}) => {

    return(
        <div>

            <div className="md:grid  md:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                plates.length !== 0 ?
                    (
                        plates.map((plate, key) => {
                            return(
                                <Plate 
                                key = {key}
                                image={plate.image}
                                name={plate.name}
                                description={plate.description}
                                category={plate.category}
                                price={plate.price}
                                />
                            ) 
                        })

                    ) : null
                }
            </div>
            <div>
                {
                    plates.length === 0 ? 
                        (
                        <div className="flex flex-col items-center">
                            <img src={FoodNF} alt="not found" className="h-48"/>
                            <p className="font-syne-bold text-xl my-5">
                                ¡Platillo no Encontrado!
                            </p>
                            <p className="font-medium mx-10 text-center">
                                Te invitamos a que verigiques si el nombre está bien escritos
                                o prueba buscando un nuevo plato
                            </p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default PlatesList;