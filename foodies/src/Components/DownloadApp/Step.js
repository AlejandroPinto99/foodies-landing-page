const Step = ({step, tittle, description}) => {
    return(
        <div className="mt-10  mb-10 md:mx-16">
            <div className="mb-5 flex flex-row justify-center items-center">
                <p className="absolute z-10 text-white text-2xl self-baseline mt-1">{step}</p>
                <svg width="42" height="42" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className="" 
                >
                    <circle cx="23.2656" cy="23" r="23" fill="#FFD600"/>
                </svg>  
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-roboto font-bold mb-5">{tittle}</p>
                <p className="text-center font-roboto">{description}</p>
                </div>
        </div>
    )
}

export default Step;