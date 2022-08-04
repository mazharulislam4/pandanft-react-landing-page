import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import "./index.css";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Discover from './pages/Discover';
import Docs from './pages/Docs';
import Home from './pages/Home';
 function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/discover' element={<Discover/>}/>
        <Route exact path='/docs' element={<Docs/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>       
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
