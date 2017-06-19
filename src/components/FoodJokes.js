import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import { isLoggedIn } from '../utils/AuthService';
import { getFoodData } from '../utils/chucknorris-api';


class FoodJokes extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  getFoodJokes() {
    getFoodData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getFoodJokes();
  }

  render() {

    const { jokes }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Bienvenido a la aplicación Gimnasio UM</h3>
        <hr/>
        <div className="col-sm-12">
          { isLoggedIn() ?
          <div className="jumbotron text-center">
            <h2>Ver calendario de Actividades</h2>
            <Link className="btn btn-lg btn-success" to='/calendar'> Calendario </Link>
          </div> : <div className="jumbotron text-center"><h2>Ingrese con su usuario para ver activiades</h2></div>
          }
        </div>
        <Footer/>

      </div>
        //
        // { jokes.map((joke, index) => (
        //       <div className="col-sm-6" key={index}>
        //         <div className="panel panel-primary">
        //           <div className="panel-heading">
        //             <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
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

export default FoodJokes;
