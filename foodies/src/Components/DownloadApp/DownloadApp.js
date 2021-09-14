import Step from './Step'
import rectangle from '../../assets/images/bg_text _moved.svg'

const DownloadApp = () => {
    return(
        <div className="mt-64 bg-white">
            <div className="relative z-20 flex flex-col font-druk-bold text-3xl text-center mb-20">
                <p className="relative z-20 mb-2">Obten más beneficios</p>
                <p className="relative z-20">
                    Descarga nuestra App
                    </p>
                <svg width="100%" height="80" viewBox="0 0 329 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute z-0 top-2/4 w-9/12 h-18 mx-10 md:w-9/12 lg:w-10/12">
                    <rect x="0.560425" y="4.42261" width="150%" height="110%" transform="rotate(-0.641723 0.560425 4.42261)" fill="#FFD600"/>
                </svg>
            </div>
            <div className="md:flex md:flex-col justify-center items-center">
                <div className="md:flex md:flex-row justify-center items-center">
                    <Step 
                        step="01"
                        tittle="Solicita rápido"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quam nesciunt ratione reprehenderit natus corrupti at"
                    />

                    <Step 
                        step="02"
                        tittle="Fácil de usar"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quam nesciunt ratione reprehenderit natus corrupti at"
                    />
                </div>
                <div className="md:w-6/12">
                    <Step 
                        step="03"
                        tittle="Promociones especiales"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quam nesciunt ratione reprehenderit natus corrupti at"
                    />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;