import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import {

  BrowseRouter,
  Route,
  Routes
} from 'react-router-dom';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>

    <Route  path="/" element={<Home />}/>   
    <Route  path="projects" element={<Projects />}/>
    <Route  path="/contact" element={<Contact />}/>
    <Route  path="/about" element={<About />}/>
    <Route  path="/thankYouPage" element={<ThankYouPage />}/>


    </Routes>
    
   </>
  );
}

export default App;
