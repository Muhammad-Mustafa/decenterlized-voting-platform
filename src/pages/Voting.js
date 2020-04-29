import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
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
  MDBIcon,
} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./../App.css";
import * as firebase from "firebase";

export default function Voting() {
  const [list, setlist] = useState([]);

  let history = useHistory();

  function Vote() {
    history.push("/Voting");
  }

  function SignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/LoginVoter");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function VoterPortal() {
    history.push("/VoterPortal");
  }

  function CanListVoter() {
    history.push("/CanListVoter");
  }

    var user = firebase.auth().currentUser.uid;
  UserConstituency(user);
  let rows_outline_btn = [];
  function UserConstituency(id) {
    firebase
      .database()
      .ref("/voters/" + id)
      .once("value")
      .then(function (snapshot) {
        let usrcc = snapshot.val().constituency;

        if (list.length < 1) {
          firebase
            .database()
            .ref("/candidate/")
            .on("value", (snapshot) => {
              snapshot.forEach((v) => {
                // console.log("ForEach suru hone se phael ");
                if (v.val().constituency === usrcc) {
                  rows_outline_btn.push({
                    picture:(
                      <img src={v.val().Profile} style={{ height: "100px" }} />
                    ),
                    flag:(
                      <img src={v.val().flag} style={{ height: "100px" }} />
                    ),
                    name: v.val().name, 
                    pp: v.val().politicalParty,
                    Approval: (
                      <Button
                        variant="primary"
                        // onClick={e => {
                        //   // ReviewProfile(v.val());
                        //   history.push({
                        //     pathname: "/CandidateProfileFroVoter",
                        //     state: { userid: v.val().Uid }
                        //   });
                        // }}
                      >
                        Vote
                      </Button>
                    ),
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
      label: "Picture",
      field: "picture",
      sort: "asc",
    },
    {
      label: "Flag",
      field: "email",
      sort: "asc",
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
    },
    {
      label: "PoliticalParty",
      field: "pp",
      sort: "asc",
    },
    {
      label: "View",
      field: "approval",
      sort: "asc",
    },
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
                <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={Vote}>
                  Vote
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
