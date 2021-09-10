import Links from './Links'

import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'

import line from '../../assets/icons/Line.svg'

const Footer = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-druk-bold text-2xl text-gray-500"> Foodies </p>
                <div className="flex flex-row justify-center my-3">
                    <img src={apple} alt="apple logo" className="mx-1"/>
                    <img src={google} alt="google logo" className="mx-1"/>
                </div>
            <img src={line} alt="line"
                className="xs:250 md:w-300 lg:400"
            />

            </div>
            <Links />
        </div>
    )
}

export default Footer;