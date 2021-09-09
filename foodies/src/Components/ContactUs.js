import phone from '../assets/images/phone.png'

const ContactUs = () => {
    return(
        <div className="text-white bg-black pb-40">
            <h3 className="pt-12 pb-5 text-4xl font-druk-bold text-center">Cuentanos tu experiencia</h3>
            <p className="pb-10 px-10 leading-5 text-gray-200 text-center">Don't miss out our great offers & receive deals from all our top
                restaurant via e-mail
            </p>

            <form className="flex flex-col">
                <label className="flex flex-col ml-5 text-xs"> Nombre y Apellido
                    <input className="mr-5 mt-1 mb-2 py-3 pl-3 bg-transparent border border-gray-400 rounded-sm"/>
                </label>

                <label className="flex flex-col ml-5 text-xs"> Correo electrónico
                    <input className="mr-5 mt-1 mb-2 py-3 pl-4 bg-transparent border border-gray-400 rounded-sm"
                        placeholder="j.doe@correo.com"
                    />
                </label>

                <label className="flex flex-col ml-5 text-xs"> Mensaje
                    <textarea className="mr-5 mt-1 mb-5 pl-4 pt-4 h-28 bg-transparent border border-gray-400 rounded-sm"
                        placeholder="El dia de ahora mi experiencia fue..."
                    />
                </label>
                <div className="flex flex-col items-center my-5 mb-36">
                    <button className="w-7/12 py-3 px-3 font-bold text-black bg-yellow-400 rounded-md">
                        Enviar comentarios
                    </button>
                </div>
            </form>

            <img src={phone} alt="phone" 
                className="absolute z-0 "
            />
        </div>
    )
}

export default ContactUs;