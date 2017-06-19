import React from 'react';
import ReactList from 'react-list';
import './css/bootstrap.min.css';
import './css/small-business.css';
import Nav from './Nav';
import Footer from './Footer';

class MyActivities extends React.Component {

  state = {
    my_activities: [
      {
        name:"Yoga"
      },
      {
        name:"Crossfit"
      },
            {
                name:"Judo"
            },
            {
                name:"Karate"
            },
            {
                name:"Yoga"
            },
            {
                name:"Ping Pong"
            },
            {
                name:"Crossfit"
            }],
    other_activities: [
      {
        name:"Zamba"
      },
      {
        name:"Spinnig",
      },{
                name:"Meditation",
            },{
                name:"Weight Lifting",
            },{
                name:"The running experience",
            },{
                name:"Spinnig",
            }]
  };

  color_class = ["w3-hover-red",
  "w3-hover-pink",
  "w3-hover-purple",
  "w3-hover-deep-purple",
  "w3-hover-indigo",
  "w3-hover-blue",
  "w3-hover-cyan",
  "w3-hover-teal",
  "w3-hover-green",
  "w3-hover-light-green",
  "w3-hover-lime",
  "w3-hover-yellow",
  "w3-hover-amber",
  "w3-hover-orange",
  "w3-hover-deep-orange"]

componentWillMount(){

}

  return_state(){
    return this.state;
  }


  renderItemMyActi = (index, key) => {
    return <li key={key} className={this.color_class[index % 14]}><span>{this.state.my_activities[index].name}</span>
            <button type="button" className="btn btn-secondary" style={{padding:'0px 12px'}}>Desinscribirme</button></li>;
  }

  renderItemOtherActi = (index, key) => {
    return <li key={key} className={this.color_class[(index + 7) % 14]}>{this.state.other_activities[index].name}
            <button type="button" className="btn btn-secondary" style={{padding:'0px 12px'}}>Inscribirme</button></li>;
  }

  render() {

      return (
        <div>
          <Nav />
          <div>
             <div className="row">
             <div className="col-lg-10">
             <h3>Actividades a las que estoy inscripto</h3>
             <ul style={{overflow: 'auto', maxHeight: 400}}  className="w3-ul">
             <ReactList
             itemRenderer={this.renderItemMyActi}
             length={this.state.my_activities.length}
             type='uniform'
             />
             </ul>
             <h3>Actividades a las que no estoy inscripto</h3>
             <ul style={{overflow: 'auto', maxHeight: 400}} className="w3-ul">
             <ReactList
             itemRenderer={this.renderItemOtherActi}
             length={this.state.other_activities.length}
             type='uniform'
             />
             </ul>
             </div>
             </div>
           </div>
           <hr/>
           <Footer/>
        </div>
      );
  }
}

export default MyActivities;
