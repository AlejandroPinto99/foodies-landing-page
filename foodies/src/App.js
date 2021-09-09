import Home from './Components/Home'
import BigHero from './Components/bigHero'
import QuienesSomos from './Components/QuienesSomos'
import BranchOffice from './Components/BranchOffices/BranchOffices'

const App = () => {
    return(
      <div className="absolute z-10">
        <Home />
        <BigHero />
        <QuienesSomos />
        <BranchOffice />
      </div>
    )
}

export default App;
