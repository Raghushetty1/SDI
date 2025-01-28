import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import { Router,Route, Routes } from 'react-router-dom';
//import { Home } from './pages/Home'
import { Footer } from './components/Footer';
import  Header  from './components/Header';
import Home from './pages/Home';
// import { Hero } from './components/HeroSection';
import { AboutUs } from './pages/About';
import { PastWorks } from './pages/Works';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { JobPostings } from './components/Jobs';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        {/* <Hero/> */}

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/gallery" element={<PastWorks />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/jobs" element={<JobPostings/>}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;



