import { useState } from 'react'
import phone from '../../assets/images/phone.png'

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    
    async function SendMessage () {
        const jsonObject = {
            "name" : name,
            "email": email,
            "message": message
        }

        try{
            const response = await fetch("https://api.elaniin.dev/api/contact", {
                method: "POST",
                body: JSON.stringify(jsonObject),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                }
            );
            

        const json = await response.json();
        console.log(json);

        } catch (e){
            console.log(e);
            alert("Something went wrong")
        }
    }

    return(
        <div className="text-white bg-black pb-40">
            <h3 className="pt-12 pb-5 text-4xl font-druk-bold text-center">Cuentanos tu experiencia</h3>
            <p className="pb-10 px-10 leading-5 text-gray-200 text-center">Don't miss out our great offers & receive deals from all our top
                restaurant via e-mail
            </p>

            <form className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    SendMessage();
                }}
            >

                <label className="flex flex-col ml-5 text-xs"> Nombre y Apellido
                    <input className="mr-5 mt-1 mb-2 py-3 pl-3 bg-transparent border border-gray-400 rounded-sm"
                        id="name"
                        value={name}
                        maxLength="191"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="flex flex-col ml-5 text-xs"> Correo electrónico
                    <input className="mr-5 mt-1 mb-2 py-3 pl-4 bg-transparent border border-gray-400 rounded-sm"
                        placeholder="j.doe@correo.com"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label className="flex flex-col ml-5 text-xs"> Mensaje
                    <textarea className="mr-5 mt-1 mb-5 pl-4 pt-4 pr-2 h-28 bg-transparent border border-gray-400 rounded-sm"
                        placeholder="El dia de ahora mi experiencia fue..."
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength="255"
                    />
                </label>
                <div className="flex flex-col items-center my-5 mb-36">
                    <button className="w-7/12 py-3 px-3 font-bold text-black bg-yellow-400 rounded-md"
                        type="submit"
                    >
                        Enviar comentarios
                    </button>
                </div>
            </form>
            <div className="flex flex-row justify-center">
                <img src={phone} alt="phone" 
                    className="absolute z-0"
                />
            </div>
        </div>
    )
}

export default ContactUs;