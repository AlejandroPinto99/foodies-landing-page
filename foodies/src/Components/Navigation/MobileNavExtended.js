import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { IoCloseSharp } from 'react-icons/io5'

import NavLinks from './NavLinks'

const MobileNavExtended =(props) => {

  return (
    <Dialog className="absolute inset-x-0 h-full w-full z-20 "  
    open={props.isOpen} onClose={props.closeDialog}>
      <Dialog.Overlay />
            <div className="h-full w-full  bg-gray-600 bg-opacity-50">
                <div className=" h-2/4 w-full bg-white rounded-b-2xl">
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="ml-4 home-tittle text-3xl">Foodies</h1>
                      <IoCloseSharp size="30px" onClick={props.closeDialog} />
                    </div>
                    <NavLinks />
                </div>
            </div>
    </Dialog>
  )
}

export default MobileNavExtended;