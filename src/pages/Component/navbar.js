import React, { useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import * as firebase from "firebase";
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
import "./../../App.css";

export default function navbar(){
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
        .catch(error => {
          alert(error.message);
        });
    }
    function Result(){
      history.push("/Result");
    }
  
    function VoterPortal() {
      history.push("/VoterPortal");
    }
  
    function CanListVoter() {
      history.push("/CanListVoter" /*,{userId}*/);
    }
  
    function QrCodeGenerator(){
  
      history.push({
            pathname: "/QrCodeGenerator",
            // state: userId,
          });
    }
    
    return(
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
              <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={QrCodeGenerator}>
                  QR-Code
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navItmes-voterProtal">
                <MDBNavLink to="" onClick={Result}>
                  Result
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

        </div>
    )
}