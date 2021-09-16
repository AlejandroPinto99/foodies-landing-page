import LandPage from './Landpage'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom' 
import MenuPage from './MenuPage'


const App = () => {
    return(
      <Router>
      <Switch >
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/" exact component={LandPage}/>
      </Switch>
      </Router>
    )
}

export default App;
