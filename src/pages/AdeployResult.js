
import React, { useEffect, useState } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";
// import deployElection from "./Component/deployElection";

export default function DeployResult() {

    let history = useHistory();
    const[userId, setUserId] = useState("");
    let user = firebase.auth().currentUser;
    const[status, setStatus] = useState("");
    const[eleciton, setElection] = useState("");
    useEffect(() => {
      if (!user) {
        history.push("/AdminLogin");
      } else {
        let userId1 = firebase.auth().currentUser.uid;
        setUserId(userId1);
        firebase
      .database()
      .ref("/result/")
      .on("value",(snapshot) => {
        console.log(snapshot.val().status);
        setStatus(snapshot.val().status);
    });
    firebase
    .database()
    .ref("/election/")
    .on("value",(snapshot) => {
      console.log(snapshot.val().status);
      setElection(snapshot.val().status);
  });
      }
    },[]);
  
    // let userId = firebase.auth().currentUser.uid;
  
    function candidateList() {
      history.push("/CandidateListAdmin");
    }
    function AdminPanal() {
      history.push("/AdminPanal");
    }
    function SignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          history.push("/AdminLogin");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  
    function ElectionCandidateListAdmin() {
      history.push("/ElectionCandidateListAdmin");
    }
    function Election(){
      history.push("/deployElection");
  }
  function Result(){
    history.push("/deployResult");
  }

  function startResult (){
      if(eleciton == "deployed"){
        alert("Election is going on can't publish the results")
      }else if(eleciton == ""){
        alert("No Results are avaliable at the moment")
      }
      else{
      if(status == "deployed"){
          alert("Result are Already Deployed!")
      }
      else if(status == "finished"){
          alert("No Results to Publish");
      }else{
        firebase
        .database()
        .ref("/result/")
        .update({
          status: "deployed"
        });
        setTimeout(alert("Result Published"), 2000);
      }
    }
  }
  function finishResult(){
    if(status == ""){
        alert("Please wait for the elections to finish")
    }
    else if(status == "finished"){
        alert("Already finished");
    }else{
      firebase
      .database()
      .ref("/result/")
      .update({
        status: "finished"
      });
      setTimeout(alert("Result removed"), 2000);
    }

  }
  
    return(
        <div>
            <div>
        <Router>
          <MDBNavbar className="navbar-AdminPanal" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Admin Panal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse3" navbar>
              <MDBNavbarNav className="navbar-Adminpanal-navlist" left>
                <MDBNavItem className="navItmes-Adminpanal" active>
                  <MDBNavLink to="" onClick={AdminPanal}>
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-Adminpanal" >
                  <MDBNavLink to="" onClick={Election}>
                    Election
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-Adminpanal" >
                  <MDBNavLink to="" onClick={Result}>
                    Result
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-Adminpanal">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Request List</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="" onClick={candidateList}>
                        Voters Request
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        href=""
                        onClick={ElectionCandidateListAdmin}
                      >
                        Candidates Requests
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              
              <MDBNavbarNav right>
                <MDBNavItem className="navItmes-Adminpanal">
                  <MDBNavLink to="" onClick={SignOut}>
                    SignOut
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>

      <div style={{
                // margin
                width: "100%",
                height: "100vh",
                padding: "0",
                marginTop: "50px",
                marginLeft: "50px",
            }}>
            <div style={{
                marginTop:'20px',
                    marginLeft: "300px",
                    
                    margindisplay: "flex",
                flexDirection: "column",

                alignContent: "center",
                alignItems: "center",
                }}>
                <h1>Here You Can Publish the Result </h1>
            </div>
            <div style={{
                marginTop: "60px",
                // display: "flex",
                // flexDirection: "column",

                // // alignContent: "center",
                // // alignItems: "center",
                // width: "400px",
                // height: "400px",
            
            }}>
               
                <input
                style={{
                    marginLeft: "400px",
                    width: "200px",
                }}
                type="button" value="Publish Results" onClick={startResult} />
                <input
                 style={{
                    marginLeft: "10px",
                    width: "200px",
                }}
                 type="button" value="Remove Results" onClick={finishResult} />
                {/* <p>the result is  {this.state.result}</p> */}
            </div>

</div>
        </div>
    )
}