import NavBar from  '../Navigation/NavBar'
import BgImage from './BgImage'

import rectangle from '../../assets/images/bg_text.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import hamburger from '../../assets/images/hero_hamburger.png'

const Home = () => {
    return(
        <div className="md:mb-48">
            <div className="z-0">
                <BgImage />
            </div>
            <div className="lg:ml-10 relative z-10">   

                <header className="flex flex-row justify-between items-center mt-4">
                    <h1 className="ml-4 font-druk-bold text-3xl w-3/12">Foodies</h1>
                    <NavBar className="mr-4"/> 
                </header>

                <div className="md:flex flex-row-reverse">
                    <div className="flex justify-center items-center md:w-6/12"> 
                        <img src={hamburger} className="mt-10 w-80 md:w-96 xl:w-100" alt="hamburger"/>
                    </div>

                    <div className="mt-10 md:w-6/12">
                        <div className="mb-5">
                            <h2 className="font-druk-bold relative z-10 text-4xl leading-8 px-3 mx-3 pt-8 
                            md:text-5xl xl:text-6xl">
                                Un nuevo sabor esta en la ciudad
                            </h2>
                            <img src={rectangle} alt="rectangle" 
                            className="absolute -mt-10 ml-5 z-0 w-80 md:w-108 xl:w-200 xl:h-20 xl:-mt-20 xl:-ml-10"/>
                        </div>
                        
                        <p className="font-body font-normal text-m leading-6 px-3 mx-3 mt-3 text-gray-400 ">
                            Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables     
                        </p>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center mt-3 md:mt-10 ">
                    <p className="mx-4 px-2 font-syne-bold text-lg md:text-2xl md:mr-1"><a href="/#"> Encuentranos</a></p>
                    <AiOutlineArrowRight className="md:text-2xl "/>
                </div>
            </div>
        </div>
    )
}

export default Home;