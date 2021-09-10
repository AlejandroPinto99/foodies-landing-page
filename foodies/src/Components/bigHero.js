import SMimage from '../assets/images/imageComponent.png'
import MDimage from '../assets/images/imageComponentM.png'

const bigHero = () => {
    return(
        <div className="mt-10">
             <picture >
                 <source media="(max-width: 640px)" srcSet={SMimage} className="w-full"/>
                 <source media="(max-width: 1024px)" srcSet={MDimage} className="w-full" />

                 <img src={MDimage} alt="group22" className="w-full" />
             </picture>
        </div>
    )
}

export default bigHero;