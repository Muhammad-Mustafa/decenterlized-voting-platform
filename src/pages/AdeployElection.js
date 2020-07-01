
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

export default function DeployElection() {

    let history = useHistory();
    const[userId, setUserId] = useState("");
    let user = firebase.auth().currentUser;
    const[status, setStatus] = useState("");
  
    useEffect(() => {
      if (!user) {
        history.push("/AdminLogin");
      } else {
        let userId1 = firebase.auth().currentUser.uid;
        setUserId(userId1);
        firebase
      .database()
      .ref("/election/")
      .on("value",(snapshot) => {
        console.log(snapshot.val().status);
        setStatus(snapshot.val().status);
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
  function startElection (){
      if(status == "deployed"){
          alert("Election is Already Deployed!")
      }
      else if(status == "finished"){
          alert("Requied Blockchain Address and Configuration");
      }else{
        firebase
        .database()
        .ref("/election/")
        .update({
          status: "deployed"
        });
        setTimeout(alert("Election Deployed"), 2000);
      }

  }
  function finishElection(){
    if(status == ""){
        alert("Don't have any on going election!")
    }
    else if(status == "finished"){
        alert("Already finished");
    }else{
      firebase
      .database()
      .ref("/election/")
      .update({
        status: "finished"
      });
      setTimeout(alert("Election finished"), 2000);
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
                <h1>Here You Can Start or Finish The Election</h1>
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
                type="button" value="Start Election" onClick={startElection} />
                <input
                 style={{
                    marginLeft: "10px",
                    width: "200px",
                }}
                 type="button" value="Finish Election" onClick={finishElection} />
                {/* <p>the result is  {this.state.result}</p> */}
            </div>

</div>
        </div>
    )
}