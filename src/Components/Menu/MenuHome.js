import NavBar from  '../Navigation/NavBar'
import BgImage from './BgImage'

import rectangle from '../../assets/images/bg_text.svg'
import hamburger from '../../assets/images/hero_hamburger_menu.png'

const MenuHome = () => {
    return(
        <div className="md:mb-42">
            <div className="z-0">
                <BgImage />
            </div>
            <div className="lg:ml-10 relative z-10">   

                <header className="flex flex-row justify-between items-center mt-4">
                    <h1 className="ml-4 font-druk-bold text-3xl w-3/12 text-white">Foodies</h1>
                    <NavBar className="mr-4"/> 
                </header>

                <div className="md:flex flex-row-reverse">
                    <div className="flex justify-center items-center md:w-6/12"> 
                        <img src={hamburger} className="mt-10 w-80 md:w-96 xl:w-100" alt="hamburger"/>
                    </div>

                    <div className="mt-10 md:w-6/12">
                        <div className="mb-5">
                            <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 pt-8 text-white
                            md:text-5xl xl:text-6xl">
                                Cada sabor es una nueva

                            </p>
                            <div className="max-w-lg">
                            <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 mb-24 text-black
                                md:text-5xl xl:text-6xl"> experiencia</p>
                            <img src={rectangle} alt="rectagle" className="relative z-0 -top-36 left-2 w-11/12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHome;