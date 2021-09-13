import Home from './Components/HomeComponent/Home'
import BigHero from './Components/bigHero'
import QuienesSomos from './Components/QuienesSomos'
import BranchOffice from './Components/BranchOffices/BranchOffices'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs/ContactUs'
import DownloadApp from './Components/DownloadApp/DownloadApp'
import Footer from './Components/Footer/Footer'




const App = () => {
    return(
      <div className="absolute z-10">
        <Home />
        <div className="xl:flex xl:flex-row">
          <BigHero className="xl:w-6/12"/>
          <QuienesSomos className="xl:w-6/12" />
        </div>
        <BranchOffice />
        <Testimonials />
        <ContactUs />
        <DownloadApp />
        <Footer />
      </div>
    )
}

export default App;
