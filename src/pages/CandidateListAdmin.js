import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
export default function CandidateListAdmin() {
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
  const columns = [
    {
      label: "#",
      field: "id",
      sort: "asc"
    },
    {
      label: "Name ",
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

  const rows_outline_btn = [
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.comsssssssssssssssssss",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm">
          View
        </MDBBtn>
      )
    },
    {
      id: 1,
      first: "Mustafa",
      email: "mustafaraziq30@gmail.com",
      gender: "Male",
      cnic: "1111111111111",
      Approval: (
        <MDBBtn color="purple" outline size="sm" >
          View
        </MDBBtn>
      )
    }
  ];
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
                      <MDBDropdownItem href="">
                        Candidates Requests
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="navItmes-Adminpanal">
                  <MDBNavLink to="">Election</MDBNavLink>
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
        <MDBTableBody rows={rows_outline_btn} />
      </MDBTable>
    </div>
  );
}
