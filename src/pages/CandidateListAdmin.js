import React, { useState, useEffect } from "react";
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

import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";

export default function CandidateListAdmin({ ...props }) {
  let history = useHistory();
  let user = firebase.auth().currentUser;
  const [list, setlist] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push("/AdminLogin");
    }
  });

  // let userId = firebase.auth().currentUser.uid;
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
      label: "Approve",
      field: "approval",
      sort: "asc"
    }
  ];

  let rows_outline_btn = [];
  if (list.length < 1) {
    firebase
      .database()
      .ref("voters")
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
                <Button
                  variant="primary"
                  onClick={e => {
                    history.push({
                      pathname: "/ReviewProfile",
                      state: { userid: v.val().Uid }
                    });
                  }}
                >
                  View
                </Button>
              )
            });
          }
        });
        setlist(rows_outline_btn);
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
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse3" navbar>
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
      <MDBTable btn>
        <MDBTableHead columns={columns} />
        <MDBTableBody rows={list} />
      </MDBTable>
    </div>
  );
}
