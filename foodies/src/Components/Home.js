import NavBar from  './Navigation/NavBar'


import figure from '../assets/images/Subtract.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import hamburger from '../assets/images/hero_hamburger.png'

const Home = () => {
    return(
        <div>
            <div className="fixed z-0">
                <img src={figure} alt="subtract" 
                    className="h-96 ml-3 "
                />
            </div>
           
            <div className="fixed z-10">    
                <header className="flex flex-row justify-between items-center mt-4">
                    <h1 className="ml-4 home-tittle text-3xl">Foodies</h1>
                    <NavBar /> 
                </header>
                <div> 
                    <img src={hamburger} className="mt-10 ml-5" alt="hamburger"/>
                </div>
                <div>
                </div>
                <div className="mt-10">
                    <h2 className="home-tittle text-4xl leading-8 px-3 mx-3">Un nuevo sabor esta en la ciudad</h2>
                    <p 
                    className="font-body font-normal text-m leading-6 px-3 mx-3 mt-3 text-gray-400 ">
                        Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables     
                    </p>
                </div>
                <div className="flex flex-row justify-start items-center mt-3 ">
                    <p className="mx-4 px-2 links text-lg"><a href="/#"> Encuentranos</a></p>
                    <AiOutlineArrowRight/>
                </div>
         
            </div>
        </div>
    )
}

export default Home;