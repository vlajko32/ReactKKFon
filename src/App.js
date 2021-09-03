//import './App.css';
import React from 'react';

import {BrowserRouter as Switch, Route, BrowserRouter} from 'react-router-dom';
import PlayersPage from './components/Pages/PlayersPage';
import HomePage from './components/Pages/HomePage';
function App() {


  return (
    
     <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/players"component={PlayersPage}/>
        </Switch>
      
    </BrowserRouter>
      
   
  )
}

export default App;
