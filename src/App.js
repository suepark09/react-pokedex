import React from 'react';
import Axios from 'axios'; 
import Navigation from './Navbar';
import Hero from './Hero';
import Pokemon from './Pokemon';
import Filter from './Filter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      allPokemon: { pokemon_species: [] }
    }
  }

  componentDidMount () {
    Axios.get('http://pokeapi.co/api/v2/generation/1/')
      .then(({data}) => {
        // console.log(data.pokemon_species);
        this.setState({
          allPokemon: data
         
        })
      })
  }
  
  render() {
    let pokemonJSX = this.state.allPokemon.pokemon_species.map((pokemon, index) => {
      return <Pokemon key={index}{...pokemon}/>
    });

    return (
      <div className="App">
        <Navigation />
        <Hero /> 
        <Filter />
        <div className="gallery">
          {pokemonJSX}
       
        </div>


      </div>
    );
  }
}

export default App;
