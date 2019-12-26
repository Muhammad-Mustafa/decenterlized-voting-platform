import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
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
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import * as firebase from "firebase";

export default function VoterPortal() {
  let history = useHistory();
  var user = firebase.auth().currentUser;

  useEffect(() => {
    if (!user) {
      history.push("/LoginVoter");
    } else {
      var userId = firebase.auth().currentUser.uid;
      console.log(userId);
    }
  });
  // console.log(props.location.state.user)
  // let gender1 = props.location.state.user.gender
  // const [gender, setGender] = useState(gender1);
  // useEffect(() => {
  //     var user = firebase.auth().currentUser;

  //     if (user) {
  //         console.log(user.displayName);
  //     } else {
  //         history.push("/Login");
  //     }
  // });
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
                  <MDBNavLink to="">Dashboard</MDBNavLink>
                </MDBNavItem>
    
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="">Candidates list</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="">Election</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="">Results</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="">SignOut</MDBNavLink>
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
