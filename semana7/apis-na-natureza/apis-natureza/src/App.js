
import axios from "axios"
import React from "react"
import './style.css'


export default class App extends React.Component {

  state = {
    pokemons: [],
    picture: ''
    
  }



  componentDidMount() {
    this.getPokemons()
  }

  getPokemons = async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    )
    this.setState({ pokemons: response.data.results })

  }

  getPokePicture = async (event) => {
    console.log(event.target.value);
    const url = event.target.value
    const response = await axios.get(`${url}`)
    this.setState({ picture: response.data.sprites.front_default })
  }


  render() {
    console.log('Pokemons no stado:', this.state.pokemons);
    const pokeList = this.state.pokemons.map((poke) => {
      return <option key={poke.name} value={poke.url}>{poke.name}</option>

    })

    return (

      <div className='App'>
        <section className='pokemons'>
          <h1>Pokemons</h1>
          <select onChange={this.getPokePicture}>
            <option>Selecione um Pokemon</option>
            {pokeList}
            </select>
          {this.state.picture &&
            <img src={this.state.picture} alt='foto do pokemon'></img>
          }
        </section>

      </div>
    )
  }
}
