import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/bookpage';
import Layout from './components/Layout';
import './App.css';
import Categories from './pages/categoriespage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
