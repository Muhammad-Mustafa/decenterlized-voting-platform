import React, { useState, useEffect } from "react";
import onlineiconimg from ".././assets/onlineicn.png";
import { Button } from "react-bootstrap";
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

import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";
export default function CanListVoter(props) {
  let history = useHistory();
  var crusr = firebase.auth().currentUser;
  const [list, setlist] = useState([]);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (!crusr) {
      history.push("/LoginVoter");
    } else {
      console.log("FromCanList", user);
    }
  });
  var user = firebase.auth().currentUser.uid;
  UserConstituency(user);
  let rows_outline_btn = [];
  function UserConstituency(id) {
    firebase
      .database()
      .ref("/voters/" + id)
      .once("value")
      .then(function(snapshot) {
        let usrcc = snapshot.val().constituency;

        if (list.length < 1) {
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
                      <Button
                        variant="primary"
                        onClick={e => {
                          // ReviewProfile(v.val());
                          history.push({
                            pathname: "/CandidateProfileFroVoter",
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
  // const usrConstituency = UserConstituency(user);

  // let constituency = UserConstituency(props.location.state.userId);

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
              <strong className="white-text">Voter Portal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ />
            <MDBCollapse
              id="navbarCollapse3"
              /*isOpen={this.state.isOpen}*/ navbar
            >
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

      <MDBTable btn className="tablepad">
        <MDBTableHead className="tabelhead" columns={columns} />
        <MDBTableBody rows={list} />
      </MDBTable>
    </div>
  );
}
