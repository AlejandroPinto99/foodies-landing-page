import ellipse from '../../assets/images/Ellipse.svg'
import Step from './Step'

const DownloadApp = () => {
    return(
        <div className="mt-64 bg-white">
            <div className="relative z-20 flex flex-col font-druk-bold text-3xl text-center mb-20">
                <p className="relative z-20 mb-2">Obten más beneficios</p>
                <p className="relative z-20">Descarga nuestra App</p>
                <svg width="329" height="80" viewBox="0 0 329 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-0 top-20 left-5"
                >
                    <rect x="0.560425" y="4.42261" width="327.5" height="74.9903" transform="rotate(-0.641723 0.560425 4.42261)" fill="#FFD600"/>
                </svg>
            </div>
            <div>
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

                <Step 
                    step="03"
                    tittle="Promociones especiales"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quam nesciunt ratione reprehenderit natus corrupti at"
                />
            </div>
        </div>
    )
}

export default DownloadApp;