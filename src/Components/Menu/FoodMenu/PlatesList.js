import Plate from './Plate'

const PlatesList = ({plates, links}) => {

    return(
        <div>
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