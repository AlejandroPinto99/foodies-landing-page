import Links from './Links'

import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'

const Footer = () => {
    return(
        <div>
            <p className="font-druk-bold text-center text-2xl text-gray-500"> Foodies </p>
            <div className="flex flex-row justify-center my-3">
                <img src={apple} alt="apple logo" className="mx-1"/>
                <img src={google} alt="google logo" className="mx-1"/>
            </div>

            <svg width="343" height="1" viewBox="0 0 343 1" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="pl-4"
            >
                <line x1="-4.37114e-08" y1="0.5" x2="343" y2="0.49997" stroke="#FFC700"/>
            </svg>
            <Links />
        </div>
    )
}

export default Footer;