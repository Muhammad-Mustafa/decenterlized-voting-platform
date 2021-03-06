import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import RegVoter from "./pages/RegisterVoter";
import RegisterCandidate from "./pages/RegisterCandidate";
import CandidateProfileFroVoter from "./pages/CandidateProfileFroVoter";
import AdminLogin from "./pages/AdminLogin";
import AdminPanal from "./pages/AdminPanal";
import CandidatePortal from "./pages/CandidatePortal";
import LoginVoter from "./pages/LoginVoter";
import VoterPortal from "./pages/VoterPortal";
import CanListVoter from "./pages/CanListVoter";
import CandidateProfileFroCandidate from "./pages/CandidateProfileFroCandidate";
import CanListCan from "./pages/CanListCan";
import LoginCandidate from "./pages/LoginCandidate";
import Error404 from "./pages/Error404.js";
import CandidateListAdmin from "./pages/CandidateListAdmin.js";
import ReviewProfile from "./pages/ReviewProfile";
import ElectionCandidateListAdmin from "./pages/ElectionCandidateListAdmin";
import ReviewProfileCandidateAdmin from "./pages/ReviewProfileCandidateAdmin";
import FaceRecognition from "./views/cameraFaceDetect";
import RegCam from "./pages/RegCam";
import SucessfullVoting from './pages/SucessfullVoting'
import Voting from "./pages/Voting";
import QrcodeReader from "./pages/Component/QrcodeReader";
import DeployResult from './pages/AdeployResult'
import DeployElection from './pages/AdeployElection'

import RegCamCandidate from "./pages/RegCamCandidate";
// import { ProtectedRoute } from './pages/Protected.routes';
import QrCodeGenerator from "./pages/Component/QrcodeGenerator"
import BlockchainList from "./pages/Component/BlockchainList"
import Result from "./pages/Component/Result"
import "./App.css";
import firebaseConfig from "./Firebase/firebaseConnection";
import * as firebase from "firebase";
import createHistory from "history/createBrowserHistory";
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function App() {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={LandingPage} />
          <Route exact path="/facerecognition" component={FaceRecognition} />
          <Route exact path="/RegisterVoter" component={RegVoter} />
          <Route
            exact
            path="/RegisterCandidate"
            component={RegisterCandidate}
          />
          <Route exact path="/QrCodeGenerator" component={QrCodeGenerator} />
          <Route exact path="/QrcodeReader" component={QrcodeReader} />
          <Route exact path="/BlockchainList" component={BlockchainList} />
          <Route exact path="/Result" component={Result} />

          <Route
            exact
            path="/CandidateProfileFroCandidate"
            component={CandidateProfileFroCandidate}
          />
          <Route exact path="/CandidatePortal" component={CandidatePortal} />
          <Route exact path="/CanListVoter" component={CanListVoter} />
          <Route exact path="/LoginCandidate" component={LoginCandidate} />
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/AdminPanal" component={AdminPanal} />
          <Route exact path="/deployResult" component={DeployResult} />
          <Route exact path="/deployElection" component={DeployElection} />

          <Route exact path="/LoginVoter" component={LoginVoter} />
          <Route exact path="/VoterPortal" component={VoterPortal} />
          <Route exact path="/CanListCan" component={CanListCan} />
          <Route
            exact
            path="/CandidateListAdmin"
            component={CandidateListAdmin}
          />
          
          <Route
            exact
            path="/CandidateProfileFroVoter"
            component={CandidateProfileFroVoter}
          />
          <Route
            exact
            path="/ReviewProfileCandidateAdmin"
            component={ReviewProfileCandidateAdmin}
          />
          <Route
            exact
            path="/ElectionCandidateListAdmin"
            component={ElectionCandidateListAdmin}
          />
          <Route exact path="/SucessfullVoting" component={SucessfullVoting} />
          <Route exact path="/ReviewProfile" component={ReviewProfile} />
          <Route exact path="/RegCamCandidate" component={RegCamCandidate} />
          <Route exact path="/RegCam" component={RegCam} />
          <Route exact path ="/Voting" component={Voting} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
