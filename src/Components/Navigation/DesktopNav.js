import { Link } from 'react-router-dom'



const Desktop = ({color}) => {
    return(
        <nav>
            <ul className={`flex flex-row justify-start text-${color}`}>
                    <li>
                        <a href="#acerca_de" className="scroll_to font-syne-bold text-lg mr-12">Acerca de</a> 
                    </li>
                    <li>
                        <a href="#restaurantes" className="scroll_to font-syne-bold text-lg mr-12">Restaurantes </a>
                    </li>
                    <li>
                        <Link to="/menu" className="font-syne-bold text-lg mr-12">Menu</Link> 
                    </li>
                    <li>
                        <a  href="#contact"className=" scroll_to font-syne-bold text-lg mr-12">Contáctanos</a> 
                    </li>
                </ul>
        </nav>
    )
}

export default Desktop;