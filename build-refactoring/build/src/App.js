import './App.css';
import BestCanvas from './components/bestCanvas';
import Gallery from './components/gallery';
// import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BestCanvas />
      <Gallery galleryName={"Hall Of Fame This Week"}/>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
