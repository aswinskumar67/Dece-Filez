import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Upload from './Components/Dashboard/Upload.js';
import * as serviceWorker from './serviceWorker';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import SingleFile from './Components/Dashboard/SingleFile';
import main2 from './Components/Main Section/main2';
import Login2 from './Components/Login/Login copy'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/Login-sign-up" component={Input} />
      <Route exact path="/Dashboard/Browse-files" component={Dashboard}/>
      <Route exact path="/New-Main" component={main2}/>
      <Route exact path="/Upload-Files" component={Upload}/>
      <Route exact path="/login2" component={Login2}/>
      <Route path="/Dashboard/Browse-files/:id" component={SingleFile}/>
      
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
