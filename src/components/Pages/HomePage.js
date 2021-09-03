import '../Pages/HomePage.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {BrowserRouter as Switch, Route, BrowserRouter} from 'react-router-dom';
import DenseAppBar from '../AppBar';
import AddPlayer from '../AddPlayer';
import Header from '../Header';
import Players from '../Players';


function HomePage() {


  return (
    <>
    <DenseAppBar />
    <div className='container1'>
    <h1>Faculty of Organizational Sciences</h1>
    <p>The Faculty of Organisational Sciences of the University in Belgrade 
    is one of the first-tier educational institutions of the University of Belgrade, Serbia. </p>
    <p>Basketball team was founded in 1991 and since then it became the most dominant university team
        in Serbia.
    </p>
    
    </div>
    
    </>
  )
}

export default HomePage;
