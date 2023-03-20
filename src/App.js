import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Admin from "./pages/Admin"
import React from 'react'
import Container from './components/layout/Container'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      </Container>
      </Router>
  );
}

export default App;
