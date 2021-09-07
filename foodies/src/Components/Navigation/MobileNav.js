import NavLinks from "./NavLinks";
import Modal from '../Modal'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'


const MobileNav = () => {

    const [nav, setNav] = useState(false);

    return(
        <div>
            <nav className="flex flex-row-reverse">
                <GiHamburgerMenu size="30px"
                    onClick={()=> setNav(!nav)}
                />
                {
                    nav ? (
                        <Modal>
                            <div className="absolute h-screen w-full bg-gray-400">
                                <NavLinks />
                            </div>
                        </Modal>
                    ) : null
                }
            
            </nav>
        </div>
    )
}

export default MobileNav;