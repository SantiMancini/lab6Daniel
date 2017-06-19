import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Calendar from './Calendar';
import Footer from './Footer';
import { getCelebrityData } from '../utils/chucknorris-api';

class CelebrityJokes extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  render() {

    //const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Calendario de Actividades</h3>
        <hr/>
        <Calendar/>
        <hr/>
        <Footer/>
      </div>
        // dentro del main div va esto
        // { jokes.map((joke, index) => (
        //       <div className="col-sm-6" key={index}>
        //         <div className="panel panel-danger">
        //           <div className="panel-heading">
        //             <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
        //           </div>
        //           <div className="panel-body">
        //             <p> { joke.joke } </p>
        //           </div>
        //         </div>
        //       </div>
        //   ))}
    );
  }
}

export default CelebrityJokes;
