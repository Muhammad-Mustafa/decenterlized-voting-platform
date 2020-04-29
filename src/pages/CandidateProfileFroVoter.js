import React, { useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import onlineiconimg from ".././assets/onlineicn.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { MDBCard, MDBCardImage } from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";
export default function CandidateProfileFroVoter(props) {
  let history = useHistory();

  var user = firebase.auth().currentUser;
  let userId = props.location.state.userid;

  useEffect(() => {
    if (!user) {
      history.push("/LoginVoter");
    } else {
      console.log("From VoterPortal", user);
    }
  });

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

  function VoterPortal() {
    history.push("/VoterPortal");
  }

  function CanListVoter() {
    history.push("/CanListVoter");
  }

  const column = [
    {
      label: "Attributes",
      field: "name",
      sort: "asc"
    },
    {
      label: "Desc",
      field: "email",
      sort: "asc"
    }
  ];
  let  userImg = "";
  getUserImage();
  let rows_outline_btn = [];

  firebase
    .database()
    .ref("/candidate/" + userId)
    .once("value", v => {
      rows_outline_btn.push({
        name: "Name",
        email: v.val().name
      });
      rows_outline_btn.push({
        name: "Email",
        email: v.val().email
      });
      rows_outline_btn.push({
        name: "Gender",
        email: v.val().gender
      });
      rows_outline_btn.push({
        name: "DOB",
        email: v.val().dob
      });
      rows_outline_btn.push({
        name: "Political Party",
        email: v.val().politicalParty
      });
      rows_outline_btn.push({
        name: "constituency",
        email: v.val().constituency
      });
    });
    function getUserImage(){
      firebase
      .database()
      .ref("/candidate/" + userId)
      .once("value", v => {
       userImg = v.val().Profile
    });
    console.log(userImg);
    }

  return (
    <div>
      <div>
        <div>
          <Router>
            <MDBNavbar className="navbar-voterProtal" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Voter Portal</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse id="navbarCollapse3" navbar>
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
        <MDBRow>
          <div>
            <MDBCol sm="4">
              <MDBCard className="AdminProfileCard">
                <MDBCardImage
                  className="img-fluid admin-avatar"
                  src={userImg}
                  waves
                />
              </MDBCard>
            </MDBCol>
          </div>

          <MDBCol sm="8">
            <h1 className="admin-heading">Candidate Details</h1>
            <div className="tablebdr">
              <MDBTable>
                <MDBTableHead columns={column} />
                <MDBTableBody rows={rows_outline_btn} />
              </MDBTable>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
