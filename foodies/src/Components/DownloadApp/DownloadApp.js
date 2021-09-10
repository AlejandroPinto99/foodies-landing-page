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
                <img src={rectangle} alt="bg" className="absolute z-0 top-2/4 w-10/12 h-20 mx-10"/>
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