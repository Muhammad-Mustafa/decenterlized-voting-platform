import React, { useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import onlineiconimg from ".././assets/onlineicn.png";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";

export default function CandidatePortal(props) {
  let history = useHistory();

  var user = firebase.auth().currentUser;
  useEffect(() => {
    if (!user) {
      history.push("/LoginCandidate");
    } else {
      console.log("From VoterPortal", user);
    }
  });
  let userId = firebase.auth().currentUser.uid;

  function SignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/LoginCandidate");
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function CandidatePortal() {
    history.push("/CandidatePortal");
  }

  function CanListCan() {
    history.push("/CanListCan" /*,{userId}*/);
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

  let rows_outline_btn = [];
  let userImg = "";
  getUserImage();
  firebase
    .database()
    .ref("/candidate/" + userId)
    .once("value", v => {
      console.log(v.val().name);
      // rows_outline_btn.push({
      //   name: "Name",
      //   email: v.val().name
      // });
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
        name: "CNIC",
        email: v.val().cnic
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
        <Router>
          <MDBNavbar className="navbar-voterProtal" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Candidate Portal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse3" navbar>
              <MDBNavbarNav className="navbar-voterPanal-navlist" left>
                <MDBNavItem className="navItmes-voterProtal" active>
                  <MDBNavLink to="" onClick={CandidatePortal}>
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="" onClick={CanListCan}>
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
            <MDBCard className="VoterProfileCard">
              <MDBCardImage
                className="img-fluid voter-avatar"
                src={userImg}
                waves
              />
              <MDBCardBody>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Candidate Portal</h1>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>
                Candidate <img src={onlineiconimg} alt="online icon" />{" "}
              </MDBCardTitle>
              <MDBCardText>
                <MDBTable>
                  <MDBTableHead columns={column} />
                  <MDBTableBody rows={rows_outline_btn} />
                </MDBTable>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
