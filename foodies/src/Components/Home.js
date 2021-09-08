import NavBar from  './Navigation/NavBar'


import figure from '../assets/images/Subtract.svg'
import rectangle from '../assets/images/bg_text.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import hamburger from '../assets/images/hero_hamburger.png'

const Home = () => {
    return(
        <div>
            <div className="z-0">
                <img src={figure} alt="subtract" 
                    className="absolute h-96  top-0 right-0"
                />
            </div>
           
            <div className="relative z-10">    
                <header className="flex flex-row justify-between items-center mt-4">
                    <h1 className="ml-4 font-druk-bold text-3xl">Foodies</h1>
                    <NavBar /> 
                </header>
                <div> 
                    <img src={hamburger} className="mt-10 ml-5" alt="hamburger"/>
                </div>
                <div>
                </div>
                <div className="mt-10">
                    <div className="mb-5">
                        <h2 className="font-druk-bold relative z-10 text-4xl leading-8 px-3 mx-3 pt-8">
                            Un nuevo sabor esta en la ciudad
                            </h2>
                        <img src={rectangle} alt="rectangle" 
                        className="absolute z-0 h-10 top-3/4 left-4"/>
                    </div>
                    <p 
                    className="font-body font-normal text-m leading-6 px-3 mx-3 mt-3 text-gray-400 ">
                        Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables     
                    </p>
                </div>
                <div className="flex flex-row justify-start items-center mt-3 ">
                    <p className="mx-4 px-2 font-syne-bold text-lg"><a href="/#"> Encuentranos</a></p>
                    <AiOutlineArrowRight/>
                </div>
         
            </div>
        </div>
    )
}

export default Home;