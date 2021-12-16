import './App.css';
import BestCanvas from './components/bestCanvas';
import Gallery from './components/gallery';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import Details from './components/details';
// import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Home />
              <BestCanvas />
              <Gallery galleryName={"Hall Of Fame This Week"}/>
            </Route>
            <Route path="/details/:title">
              <Details />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
        
          {/* <Pagination /> */}
      </div>
    </Router>
  );
}

export default App;
