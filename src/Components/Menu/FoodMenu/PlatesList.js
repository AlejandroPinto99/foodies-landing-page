import Plate from './Plate'

const PlatesList = ({plates, links}) => {

    return(
        <div className="mt-5 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4">
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
    )
}

export default PlatesList;