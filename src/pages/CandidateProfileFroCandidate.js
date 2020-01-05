import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import onlineiconimg from ".././assets/onlineicn.png";
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
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";
export default function CandidateProfileFroCandidate(props) {
    let history = useHistory();
  var user = firebase.auth().currentUser.uid;
  let userId = props.location.state.userid;


  useEffect(() => {
    if (!user) {
      history.push("/LoginCandidate");
    } else {
      // var userId = firebase.auth().currentUser.uid;
      console.log("From VoterPortal", user);
    }
  });
  // var userId = firebase.auth().currentUser.uid;
  //     console.log(userId);

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
  return (
    <div>
      <div>
        <div>
          <Router>
            <MDBNavbar className="navbar-voterProtal" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Candidate Portal</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ />
              <MDBCollapse
                id="navbarCollapse3"
                /*isOpen={this.state.isOpen}*/ navbar
              >
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
              <MDBCard className="AdminProfileCard">
                <MDBCardImage
                  className="img-fluid admin-avatar"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
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
