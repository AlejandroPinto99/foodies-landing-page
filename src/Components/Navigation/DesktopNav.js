import { Link } from 'react-router-dom'



const Desktop = ({color}) => {
    return(
        <nav>
            <ul className={`flex flex-row justify-start text-${color}`}>
                    <li className="mx-10" >
                        <a href="#acerca_de" className="scroll_to font-syne-bold text-lg mr-12 links ">Acerca de</a> 
                    </li>
                    <li  className="mx-10">
                        <a href="#restaurantes" className="scroll_to font-syne-bold text-lg mr-12 links">Restaurantes </a>
                    </li>
                    <li  className="mx-10">
                        <Link to="/menu" className="font-syne-bold text-lg mr-12 links">Menu</Link> 
                    </li>
                    <li  className="mx-10">
                        <a  href="#contact"className=" scroll_to font-syne-bold text-lg mr-12 links">Contáctanos</a> 
                    </li>
                </ul>
        </nav>
    )
}

export default Desktop;