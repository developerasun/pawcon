import './App.css';
import BestCanvas from './components/bestCanvas';
import Gallery from './components/gallery';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
// import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <BestCanvas />
        <Gallery galleryName={"Hall Of Fame This Week"}/>
        {/* <Pagination /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
