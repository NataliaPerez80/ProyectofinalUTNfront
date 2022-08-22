import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';
import PortfolioPage from './pages/PortfolioPage';
import ServiciosPage from './pages/ServiciosPage';
import StaffPage from './pages/StaffPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/servicios' element={<ServiciosPage/>} />
        <Route path='/staff' element={<StaffPage/>} />
        <Route path='/portfolio' element={<PortfolioPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contacto' element={<ContactoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

