import { Router } from 'react-router-dom';
import './App.css'
import React from 'react';
import Header from './composants/Header';
import Footer from './composants/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ListUsers from './pages/ListUsers';
import ListUsers2 from './pages/ListUsers2';
import HomePage from './pages/HomePage';
import Inscription from './pages/Inscription';
import Modification from './pages/Modification';
import Suppression from './pages/Suppression';
import NotFound from './pages/notFound';

function App() {
  return (
        <BrowserRouter>
          <Header />
          <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/user1' element={<ListUsers />} />
            <Route path='/user2' element={<ListUsers2 />} />
            <Route path='/options/1' element={<Inscription />} />
            <Route path='/options/2' element={<Modification />} />
            <Route path='/options/3' element={<Suppression />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>


  );
}

export default App;