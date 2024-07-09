import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Testimonials from './pages/Testimonials.jsx';

function App() {


  return (
    
    <Router>
      <Switch>
        <Route exact path="/" Component={Home}></Route>
        <Route path='/projects' Component={Projects}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/testimonials' Component={Testimonials}></Route>
    
      </Switch> 
    </Router>

      
    
  )
}

export default App
