import React from 'react';
import logo from './logo.svg';
import './App.css';

import Init from './modules/init';
import GamePlay from './modules/gameplay';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      Players : {
        playerOne : {
          name : 'Mia',
          color : 'blue',
          rounds : ['W', 'W', 'L']
        }, 
        playerTwo : {
          name : 'Angela',
          color : 'red',
          rounds : ['L', 'L', 'W']
       }
     }
   }
  }
  render(){
    return (
      <GamePlay Players={this.state.Players}/>
    );
  }
}

export default App;
