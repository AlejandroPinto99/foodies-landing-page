import { Dialog } from '@headlessui/react'
import { IoCloseSharp } from 'react-icons/io5'

const MobileNavExtended =(props) => {

  return (
    <Dialog className="absolute inset-x-0 h-full w-full z-20 "  
    open={props.isOpen} onClose={props.closeDialog}>
      <Dialog.Overlay />
            <div className="h-full w-full  bg-gray-600 bg-opacity-50">
                <div className=" h-3/5 w-full bg-white rounded-b-2xl">
                    <div className="flex flex-row justify-between items-center pt-6 pr-3">
                      <h1 className="ml-4 home-tittle text-3xl">Foodies</h1>
                      <IoCloseSharp size="30px" onClick={props.closeDialog} />
                    </div>
                    <div className="h-2/4 mt-4">
                      <ul className="flex flex-col ml-4 justify-between h-full ">
                          <li>
                            <a href="/#acerda_de" className="links text-2xl">Acerca de</a> 
                          </li>
                          <li>
                            <a href="/#restaurantes" className="links text-2xl">Restaurantes</a> 
                          </li>
                          <li>
                            <a href="/#contactanos" className="links text-2xl">Contáctanos</a> 
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
    </Dialog>
  )
}

export default MobileNavExtended;