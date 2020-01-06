import React, { useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import onlineiconimg from ".././assets/onlineicn.png";
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

export default function VoterPortal(props) {
  let history = useHistory();

  var cuser = firebase.auth().currentUser;
  useEffect(() => {
    if (!cuser) {
      history.push("/LoginVoter");
    } else {
      // var userId = firebase.auth().currentUser.uid;
      console.log("From VoterPortal", cuser);
    }
  });

  // var user = firebase.auth().currentUser.uid;

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
    history.push("/CanListVoter" /*,{userId}*/);
  }

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

      <MDBRow>
        <div>
          <MDBCol sm="4">
            <MDBCard className="VoterProfileCard">
              <MDBCardImage
                className="img-fluid voter-avatar"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Voter</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Voter Portal</h1>
          <p className="admin-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            mollitia enim repellat quam similique, facere eligendi? Voluptate
            accusantium error commodi ab reiciendis iste dolorum, illum, velit
            explicabo incidunt, vel cum!
          </p>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
