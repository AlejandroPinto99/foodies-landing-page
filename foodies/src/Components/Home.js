import NavBar from './Navigation/NavBar'

import hamburger from '../assets/images/hero_hamburger.png'

const Home = () => {
    return(
        <div>
            <NavBar />
            <div> 
                <img src={hamburger} className="" alt="hamburger"/>
            </div>
            <div>
            </div>
            <h2 className="font-bold h-0 text-5xl leading-8 absolute top-5/3 px-3 mx-3">Un nuevo sabor esta en la ciudad</h2>
            <p 
            className="font-body font-normal text-m leading-6 absolute top-3/4 px-3 mx-3 text-gray-400">
                Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables
            </p>
        </div>
    )
}

export default Home;