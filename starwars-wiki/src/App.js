import React, { Component } from 'react';
import CharactersList from './CharactersList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        characters: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(result => result = result.results)
    .then(characters => this.setState({characters: characters}))
  }

  render(){
    if(this.state.characters.length === 0){
      return(
        <h1 className="loading">Loading from a galaxy far far away...</h1>
      );
    }else{
      return(
        <div>
          <CharactersList characters={this.state.characters}/>
        </div>
      );
    } 
  }
}

export default App;
