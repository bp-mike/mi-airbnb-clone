import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchResults from './SearchResults'

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
            <Route path='/search'>
              <SearchResults />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
