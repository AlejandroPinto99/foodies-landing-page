import Subtract from '../../assets/images/Subtract.svg'
import SubtractM from '../../assets/images/SubtractM.svg'

const BgImage= () => {
    return(
        <div className="mt-10">
             <picture >
                 <source media="(max-width: 640px)" srcSet={Subtract} className="absolute top-0 right-0"/>
                 <source media="(max-width: 1024px)" srcSet={SubtractM} className="absolute top-0 right-0" />
                 <img src={SubtractM} alt="group22" className="absolute top-0 right-0" />
             </picture>
        </div>
    )
}
export default BgImage