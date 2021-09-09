import Home from './Components/Home'
import BigHero from './Components/bigHero'
import QuienesSomos from './Components/QuienesSomos'
import BranchOffice from './Components/BranchOffices/BranchOffices'
import ContactUs from './Components/ContactUs'
import DownloadApp from './Components/DownloadApp/DownloadApp'
import Footer from './Components/Footer/Footer'




const App = () => {
    return(
      <div className="absolute z-10">
        <Home />
        <BigHero />
        <QuienesSomos />
        <BranchOffice />
        <ContactUs />
        <DownloadApp />
        <Footer />
      </div>
    )
}

export default App;
