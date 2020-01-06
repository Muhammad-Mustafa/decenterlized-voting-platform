import React, { useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Button } from "react-bootstrap";

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
import { MDBCard, MDBCardImage } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";
export default function ReviewProfileCandidateAdmin(props) {
  var cruser = firebase.auth().currentUser;

  useEffect(() => {
    if (!cruser) {
      history.push("/AdminLogin");
    } else {
      console.log(cruser);
    }
  });

  console.log(props.location.state.userid);
  let userId = props.location.state.userid;
  let history = useHistory();

  function candidateList() {
    history.push("/CandidateListAdmin");
  }
  function AdminPanal() {
    history.push("/AdminPanal");
  }

  function ElectionCandidateListAdmin() {
    history.push("/ElectionCandidateListAdmin");
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

  function calculate_age(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now.toString());
    return age_now.toString();
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
        name: "CNIC",
        email: v.val().cnic
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

  function Approved() {
    firebase
      .database()
      .ref("/candidate/" + userId)
      .once("value")
      .then(function(snapshot) {
        let dob1 = snapshot.val().dob;
        let age = calculate_age(dob1);
        if (age >= 18) {
          alert("The Request is Accepted!");
          firebase
            .database()
            .ref("/candidate/" + userId)
            .update({
              isRegistered: "true"
            });
          console.log(age + "FROM ACCEPT");
          history.push("/ElectionCandidateListAdmin");
        } else {
          console.log(age + "FROM Reject");
          alert("Invalid Age Request cannot be Accepted!!");
        }
      });
  }

  function Reject() {
    alert("The Request is Rejected!");
    firebase
      .database()
      .ref("/candidate/" + userId)
      .once("value")
      .then(function(snapshot) {
        let email = snapshot.val().email;
        let pass = snapshot.val().password;

        firebase
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then(u => {
            let user = firebase.auth().currentUser;
            user.delete();
          });
        // firebase.auth.signOut();
      });
    firebase
      .database()
      .ref("/candidate/" + userId)
      .remove();
    history.push("/ElectionCandidateListAdmin");
  }
  return (
    <div>
      <div>
        <Router>
          <MDBNavbar className="navbar-AdminPanal" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Admin Panal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ />
            <MDBCollapse
              id="navbarCollapse3"
              /*isOpen={this.state.isOpen}*/ navbar
            >
              <MDBNavbarNav className="navbar-Adminpanal-navlist" left>
                <MDBNavItem className="navItmes-Adminpanal" active>
                  <MDBNavLink to="" onClick={AdminPanal}>
                    Dashboard
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
          <h1 className="admin-heading">Registraction Request</h1>
          <div className="tablebdr">
            <MDBTable>
              <MDBTableHead columns={column} />
              <MDBTableBody rows={rows_outline_btn} />
            </MDBTable>
          </div>
          <div className="conBtn">
            <Button variant="success" className="Approvebtn" onClick={Approved}>
              Approve
            </Button>
            <Button variant="danger" className="Rejectbtn" onClick={Reject}>
              Reject
            </Button>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
