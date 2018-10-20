import React, { Component } from 'react';
import './Characters.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            homePlanet: '',
            specieName: '',
        };
    }
   
    componentDidMount() {
        fetch(this.props.homeworld)
        .then(response => response.json())
        .then(data => {
            this.setState({ homePlanet: data.name })
        })

        fetch(this.props.species)
        .then(response => response.json())
        .then(data => this.setState({specieName: data.name}))
    }

    render() {
        const { homePlanet, specieName } = this.state;
        const { name, birthYear, gender, height, mass } = this.props;

        return(
            <div className="flip-card tc dib pa3 ma2 bw2">
            <div className="flip-card-inner">
                <div className="flip-card-front br3 pa3">
                    <img src={require(`./images/${name}.jpg`)} alt="card" height="300px" width="300px" className="br3"/>
                    <h1 className="f4 mt2 mb0 cap">{name}</h1>
                </div>
                <div className="flip-card-back br3 pa3">
                    <h4 className="mt2 mb0">Homeworld</h4>
                    <p className="mt0 cap">{homePlanet}</p>
                    <h4 className="mb0">Species</h4>
                    <p className="mt0 cap">{specieName}</p>
                    <h4 className="mb0">Birth Year</h4>
                    <p className="mt0">{birthYear}</p>
                    <h4 className="mb0">Gender</h4>
                    <p className="mt0 cap">{gender}</p>
                    <h4 className="mb0">Height</h4>
                    <p className="mt0">{height} cm</p>
                    <h4 className="mb0">Mass</h4>
                    <p className="mt0">{mass} kg</p>
                </div>
            </div>
        </div>      
        );
    }
} 

export default Card;