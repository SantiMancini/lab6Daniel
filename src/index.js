import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import MyActivities from './components/MyActivities';
import EditUser from './components/EditUser';
import addActivity from './components/addActivity';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'select2/select2.css';
import 'react-forms-ui/lib/react-forms-ui.css';
import {initialize} from 'react-forms-ui';
initialize()

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={FoodJokes}/>
        <Route path="/calendar" component={CelebrityJokes} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
        <Route path="/myActivities" component={MyActivities} />
        <Route path="/editUser" component={EditUser} />
        <Route path="/addActivity" component={addActivity} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
