import React, { useState, useEffect } from "react";
import onlineiconimg from ".././assets/onlineicn.png";
import { Button } from "react-bootstrap";

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
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./../App.css";
import * as firebase from "firebase";

export default function CanListCan() {
  let history = useHistory();

  const [list, setlist] = useState([]);
  var crusr = firebase.auth().currentUser;
  useEffect(() => {
    if (!crusr) {
      history.push("/LoginCandidate");
    } else {
      console.log("From VoterPortal", user);
    }
  });
  var user = firebase.auth().currentUser.uid;
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
  UserConstituency(user);
  let rows_outline_btn = [];
  function UserConstituency(id) {
    firebase
      .database()
      .ref("/candidate/" + id)
      .once("value")
      .then(function(snapshot) {
        let usrcc = snapshot.val().constituency;

        if (list.length < 1 /*&&!bool*/) {
          firebase
            .database()
            .ref("/candidate/")
            .on("value", snapshot => {
              snapshot.forEach(v => {
                // console.log("ForEach suru hone se phael ");
                if (v.val().constituency === usrcc) {
                  rows_outline_btn.push({
                    name: v.val().name,
                    email: v.val().email,
                    gender: v.val().gender,
                    pp: v.val().politicalParty,
                    Approval: (
                      // <a onClick ={ReviewProfile(v.val().Uid)}>View</a>
                      <Button
                        variant="primary"
                        onClick={e => {
                          // ReviewProfile(v.val());
                          history.push({
                            pathname: "/CandidateProfileFroCandidate",
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
      label: "PoliticalParty",
      field: "pp",
      sort: "asc"
    },
    {
      label: "View",
      field: "approval",
      sort: "asc"
    }
  ];
  return (
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

      <MDBTable btn>
        <MDBTableHead columns={columns} />
        <MDBTableBody rows={list} />
      </MDBTable>
    </div>
  );
}
