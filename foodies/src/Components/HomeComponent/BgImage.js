import Subtract from '../../assets/images/Subtract.svg'
import SubtractM from '../../assets/images/SubtractM.svg'
import SubtractL from '../../assets/images/SubtractL.svg'

const BgImage= () => {
    return(
        <div className="mt-10">
             <picture >
                 <source media="(max-width: 768px)" srcSet={Subtract} className="absolute top-0 right-0"/>
                 <source media="(max-width: 1280px)" srcSet={SubtractM} className="absolute top-0 right-0" />
                 <img src={SubtractL} alt="group22" className="absolute top-0 right-0" />
             </picture>
        </div>
    )
}
export default BgImage