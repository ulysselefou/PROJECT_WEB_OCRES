import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TauxSucres from './components/TauxSucres' ;
import TauxGraissessaturees from './TauxGraissesaturees' ;
import TauxSel from './TauxSel';
import TauxCalories from './TauxCalories';
import TauxFibres from './TauxFibres';
import Zoneprovenance from './Zoneprovenance';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation.';
import { render } from 'react-dom';

Class App extends Component{
  constructor(){
    super();
    this.state = {
      widget: [
        {name: 'TauxSucres', 
      id='tauxSucres'
      },
        {name: 'TauxCalories',
      id= 'tauxCalories'
    }
        {name: 'TauxFibres',
      id = 'Ttauxfibres'
    }
        {name: 'TauxSel',
      id= 'TauxSel',
    }
        {name: 'TauxGraissesaturees',
      id= 'tauxGraissesaturees'
    }
      ]
    }
  }
}

 buildGrid =() =>

    for (let y=0'

render(){
  return(
    <div className
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        
        <Route path="/" exact component={Navigation}/>
        </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Food Fact
        </a>
      </header>
    </div>
  );
}

export default App;
