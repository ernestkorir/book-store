import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/books';
import './App.css';
import Categories from './components/categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path="/" element={<Books title="React in Action" author="Mark Tielens" />} />
       <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  );
}

export default App;
