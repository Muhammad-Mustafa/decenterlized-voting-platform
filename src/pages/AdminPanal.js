import React, { useEffect, useState } from "react";
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
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
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
// import deployElection from "./Component/deployElection";

export default function AdminPanal() {
  let history = useHistory();
  const[userId, setUserId] = useState("");
  let user = firebase.auth().currentUser;


  useEffect(() => {
    if (!user) {
      history.push("/AdminLogin");
    } else {
      let userId1 = firebase.auth().currentUser.uid;
      setUserId(userId1);
    }
  });

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
    .ref("/admin/" + userId)
    .once("value", v => {
      console.log(v.val().name);
      rows_outline_btn.push({
        name: "Name",
        email: v.val().name
      });
      rows_outline_btn.push({
        name: "Email",
        email: v.val().email
      });
      
    });

  return (
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

      <MDBRow>
        <div>
          <MDBCol sm="4">
            <MDBCard className="AdminProfileCard">
              <MDBCardImage
                className="img-fluid admin-avatar"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>
                  Admin <img src={onlineiconimg} alt="greenICN" />{" "}
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Admin Panal</h1>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>
                Admin <img src={onlineiconimg} alt="online icon" />{" "}
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
