import Home from './Components/Home'
import BigHero from './Components/bigHero'
import QuienesSomos from './Components/QuienesSomos'

const App = () => {
    return(
      <div className="absolute z-10">
        <Home />
        <BigHero />
        <QuienesSomos />
      </div>
    )
}

export default App;
