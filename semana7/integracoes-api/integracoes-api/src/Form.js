import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {

        super(props)

        this.state = {
            Nome: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)

    }
    handleInputChange(e) {
    
        this.setState({
            nome: e.target.value
        })
}


    render() {

        const { nome } = this.state
        return (
            <section>
                <form>
                <label>
                    Nome: 
                    <input onChange={this.handleInputChange} type="text" placeholder='Nome' />
                </label>

                <button type='submit'>Enviar</button>
                </form>

                <h3>{ nome } </h3>
            </section>
        )

    }
}

export default Form;