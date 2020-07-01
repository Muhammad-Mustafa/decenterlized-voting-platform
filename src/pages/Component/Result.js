import React, { useEffect, useState } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../../App.css";
import * as firebase from "firebase";
import { Line, Bar } from 'react-chartjs-2';


export default function  Result(){
  let history = useHistory();

const [election, setElection] = useState("")
let r = null;

useEffect(() => {
  console.log("Current User Id" + firebase.auth().currentUser.uid);
  firebase
    .database()
    .ref("/result/")
    .on("value",(snapshot) => {
      console.log(snapshot.val().status);
      setElection(snapshot.val().status);
  });
},[])

function Vote() {
  history.push("/Voting");
}
function SignOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      history.push("/LoginVoter");
    })
    .catch(error => {
      alert(error.message);
    });
}
function Result(){
  history.push("/Result");
}

function VoterPortal() {
  history.push("/VoterPortal");
}

function CanListVoter() {
  history.push("/CanListVoter" /*,{userId}*/);
}

function QrCodeGenerator(){

  history.push({
        pathname: "/QrCodeGenerator",
        // state: userId,
      });
}

const no  = (
  <h1 style={{
    
    marginTop: "80px",
    marginLeft: "50px",

    marginLeft: "350px",
                    
    margindisplay: "flex",
flexDirection: "column",

alignContent: "center",
alignItems: "center",
}} >No Results to show at the moment!</h1>
)
const noResult  = (
  <h1 style={{
    
    marginTop: "80px",
    marginLeft: "50px",

    marginLeft: "350px",
                    
    margindisplay: "flex",
flexDirection: "column",

alignContent: "center",
alignItems: "center",
}} >Please wait for the elections to end !!</h1>
)
const chart = (<div>
  <div>
      <h1>Result of your Constituency !</h1>
  </div>
<div>
<Bar
data={{
labels: ['PTI', 'PMLN', 'PPP', 'Independent'],
datasets:[{
  label:'Votes',
  backgroundColor:[
    'rgba(0,0,255,0.5)',
    'rgba(0,255,0,0.5)',
    'rgba(255,0,0,0.5)',
    'rgba(255,0,0,0.8)',
  ],
  data:["5698", "4625", "3468", "2795"],
}]
}}
options={{
legend: {display: false},
title: {display: true, title: "Result"},
}}  
/>
</div>
</div>)
if(election == "deployed"){
  r=chart;
}else if(election == "finished"){
  r=no;
}
else{  
  r= noResult;

}

return(
  <div>
    <div>
        <Router>
          <MDBNavbar className="navbar-voterProtal" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Voter Portal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ />
            <MDBCollapse
              id="navbarCollapse3"
              /*isOpen={this.state.isOpen}*/ navbar
            >
              <MDBNavbarNav className="navbar-voterPanal-navlist" left>
                <MDBNavItem className="navItmes-voterProtal" active>
                  <MDBNavLink to="" onClick={VoterPortal}>
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="" onClick={CanListVoter}>
                    Candidates list
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={Vote}>
                  Vote
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={QrCodeGenerator}>
                  QR-Code
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={Result}>
                  Result
                </MDBNavLink>
              </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="" onClick={SignOut}>
                    SignOut
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>
    {r}
  </div>
)
}




