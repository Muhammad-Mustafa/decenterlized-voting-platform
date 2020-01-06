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

export default function AdminPanal() {
  let history = useHistory();
  let user = firebase.auth().currentUser;

  useEffect(() => {
    if (!user) {
      history.push("/AdminLogin");
    } else {
      let userId = firebase.auth().currentUser.uid;
      console.log(userId);
    }
  });

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
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Admin Panal</h1>
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
