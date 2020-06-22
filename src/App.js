import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>    
           <Route path='/home' component={Home} exact/>

        </Switch>
      
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;
