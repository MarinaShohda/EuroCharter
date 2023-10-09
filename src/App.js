import './app.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/navPages/About';
import Faqs from './components/navPages/Faqs.jsx';
import Covid from './components/navPages/Covid.jsx';
import News from './components/navPages/News.jsx';
import Contact from './components/navPages/Contact.jsx';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        
        

        <Routes>
          <Route path="/"  element={ <Home /> } />
          <Route path="/EuroCharter"  element={ <Home /> } />
          <Route path="/about"  element={ <About />} />
          <Route path="/faqs"  element={  <Faqs /> } />
          <Route path="/covid19"  element={ <Covid /> } />
          <Route path="/news"  element={ <News /> } />
          <Route path="/contactUs"  element={ <Contact /> } />
          <Route path="*"  element={ <p>Page Not found</p> } />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App