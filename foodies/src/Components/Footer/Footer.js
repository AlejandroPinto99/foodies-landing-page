import Links from './Links'

import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'

import line from '../../assets/icons/Line.svg'

const Footer = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:mx-10">
                <p className="font-druk-bold text-2xl text-gray-500"> Foodies </p>
                <div className="flex flex-row justify-center my-3">
                    <img src={apple} alt="apple logo" className="mx-1"/>
                    <img src={google} alt="google logo" className="mx-1"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={line} alt="line"
                className="xs:250 md:w-400 lg:400 ml-5"
            />
            </div>
            <Links />
        </div>
    )
}

export default Footer;