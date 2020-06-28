import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from 'react-router-dom'

import QrcodeReader from './pages/Component/QrcodeReader'
import BlockchainList from './pages/Component/BlockchainList'
import Result from "./pages/Component/Result";

// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import RegVoter from "./pages/RegisterVoter";
// import RegisterCandidate from "./pages/RegisterCandidate";
// import AdminLogin from "./pages/AdminLogin";
// import AdminPanal from "./pages/AdminPanal";
// import LoginVoter from "./pages/LoginVoter";
// import Error404 from './pages/Error404.js';
// import { ProtectedRoute } from './pages/Protected.routes';

// var user = firebase.auth().currentUser;

//         if (user) {
//             setName(user.displayName);
//         } else {
//             history.push("/Login");
//         }var user = firebase.auth().currentUser;

//         if (user) {
//             setName(user.displayName);
//         } else {
//             history.push("/Login");
//         }

// const routing = (
  // <Router>
  //   <div>
  //     <Switch>
  //       <Route exact path="/" component={LandingPage} />
  //       <Route exact path="/Home" component={LandingPage} />
  //       <Route exact path="/RegisterVoter" component={RegVoter} />
  //       <Route exact path="/RegisterCandidate" component={RegisterCandidate} />
  //       <Route exact path="/AdminLogin" component={AdminLogin} />
  //       <ProtectedRoute exact path="/AdminPanal" component={AdminPanal} />
  //       <Route exact path="/LoginVoter" component={LoginVoter} />
  //       <Route exact path="*" component={Error404} />
  //       </Switch>
  //   </div>
  // </Router>
// );

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
serviceWorker.unregister();
