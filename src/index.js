import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login/Login.js';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Upload from './Components/Dashboard/Upload.js';

import * as serviceWorker from './serviceWorker';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import SingleFile from './Components/Dashboard/SingleFile';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/Login-sign-up" component={Login} />
      <Route exact path="/Dashboard" component={Dashboard}/>
      <Route exact path="/Upload-Files" component={Upload}/>
      <Route path="/Dashboard/:id" component={SingleFile}/>
      
    </div>
  </Router>
)
ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
