import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";

export default function ElectionCandidateListAdmin() {
  // event.preventDefault();
  let history = useHistory();
  let user = firebase.auth().currentUser;
  const [list, setlist] = useState([]);


  useEffect(() => {
    if (!user) {
      history.push("/AdminLogin");
    }
  });

//   let userId = firebase.auth().currentUser.uid;
  function candidateList() {
    history.push("/CandidateListAdmin");
  }
  // function NoListAvaliable(){
  //   history.push("/NoListAvaliable");
  // }
  function AdminPanal() {
    history.push("/AdminPanal");
  }

  function ElectionCandidateListAdmin(){
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

  const columns = [
    {
      label: "Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Email",
      field: "email",
      sort: "asc"
    },
    {
      label: "Gender",
      field: "gender",
      sort: "asc"
    },
    {
      label: "CNIC",
      field: "cnic",
      sort: "asc"
    },
    {
      label: "Approval",
      field: "approval",
      sort: "asc"
    }
  ];
  let rows_outline_btn = [];
  if(list.length <1 ){

  firebase
    .database()
    .ref("candidate")
    .on("value", snapshot => {
      snapshot.forEach(v => {
        // console.log("ForEach suru hone se phael ");
        if (v.val().isRegistered === "false") {
          rows_outline_btn.push({
            name: v.val().name,
            email: v.val().email,
            gender: v.val().gender,
            cnic: v.val().cnic,
            Approval: (
              // <a onClick ={ReviewProfile(v.val().Uid)}>View</a>
              <Button
                variant="primary"
                onClick={e => {
                  // ReviewProfile(v.val());
                  history.push({
                    pathname: "/ReviewProfileCandidateAdmin",
                    state: { userid: v.val().Uid }
                  });
                }}
              >
                View
              </Button>
              // <MDBBtn color="purple" outline size="sm">
              //   View
              // </MDBBtn>
            )
          });
        }
      });
      setlist(rows_outline_btn)
    });
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
                      <MDBDropdownItem href=""  onClick={ElectionCandidateListAdmin}>
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
      <MDBTable btn>
        <MDBTableHead columns={columns} />
        <MDBTableBody rows={list} />
      </MDBTable>
    </div>
  );
}
