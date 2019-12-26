import React from 'react';


import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegVoter from "./pages/RegisterVoter";
import RegisterCandidate from "./pages/RegisterCandidate";
import AdminLogin from "./pages/AdminLogin";
import AdminPanal from "./pages/AdminPanal";
import LoginVoter from "./pages/LoginVoter";
import VoterPortal from "./pages/VoterPortal";
import Error404 from './pages/Error404.js';
import CandidateListAdmin from "./pages/CandidateListAdmin.js";
// import { ProtectedRoute } from './pages/Protected.routes';



import './App.css';
import firebaseConfig from './Firebase/firebaseConnection';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
// firebase.analytics();





function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/RegisterVoter" component={RegVoter} />
        <Route exact path="/RegisterCandidate" component={RegisterCandidate} />
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/AdminPanal" component={AdminPanal} />
        <Route exact path="/LoginVoter" component={LoginVoter} />
        <Route exact path="/VoterPortal" component={VoterPortal} />
        <Route exact path="/CandidateListAdmin" component={CandidateListAdmin} />
        <Route exact path="*" component={Error404} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
