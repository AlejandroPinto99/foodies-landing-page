import Subtract from '../../assets/images/Subtract_Menu.png'
import SubtractM from '../../assets/images/Subtract_Menu_M.png'
import SubtractL from '../../assets/images/Subtract_Menu_L.png'

const BgImage= () => {
    return(
        <div className="mt-10">
            <picture >
                <source media="(max-width: 768px)" srcSet={Subtract} className="absolute top-0 right-0"/>
                <source media="(max-width: 1280px)" srcSet={SubtractM} className="absolute top-0 right-0" />
                <img src={SubtractL} alt="hamburger" className="absolute top-0 right-0" />
            </picture>
        </div>
    )
}
export default BgImage