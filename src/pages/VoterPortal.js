import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import onlineiconimg from ".././assets/onlineicn.png";
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
import Loader from "./Component/Loader";
export default function VoterPortal(props) {
  let history = useHistory();
  const [load, setLoad] = useState(false);
  const [img, setImg] = useState("");
  var cuser = firebase.auth().currentUser;
  // if(!cuser){
  //   history.push("/LoginVoter");
  // }
  useEffect(() => {
    if (!cuser) {
      history.push("/LoginVoter");
    } else {
      // var userId = firebase.auth().currentUser.uid;
      setLoad(true);
      console.log("From VoterPortal", cuser);
      //  let userId = firebase.auth().currentUser.uid;
    }
  });
  // let userId = firebase.auth().currentUser.uid;
  // var user = firebase.auth().currentUser.uid;

  let userId = firebase.auth().currentUser.uid;
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

  function VoterPortal() {
    history.push("/VoterPortal");
  }

  function CanListVoter() {
    history.push("/CanListVoter" /*,{userId}*/);
  }

  const column = [
    {
      label: "Attributes",
      field: "name",
      sort: "asc"
    },
    {
      label: "Desc",
      field: "email",
      sort: "asc"
    }
  ];

  let rows_outline_btn = [];
  let  userImg = "";
  getUserImage();
  firebase
    .database()
    .ref("/voters/" + userId)
    .once("value", v => {
      console.log(v.val().name);
      // rows_outline_btn.push({
      //   name: "Name",
      //   email: v.val().name
      // });
      if(img === ""){
      setImg(v.val().profile);}
      rows_outline_btn.push({
        name: "Email",
        email: v.val().email
      });
      rows_outline_btn.push({
        name: "Gender",
        email: v.val().gender
      });
      rows_outline_btn.push({
        name: "DOB",
        email: v.val().dob
      });
      rows_outline_btn.push({
        name: "CNIC",
        email: v.val().cnic
      });
      rows_outline_btn.push({
        name: "constituency",
        email: v.val().constituency
      });
    });



    function getUserImage(){
      firebase
      .database()
      .ref("/voters/" + userId)
      .once("value", v => {
       userImg = v.val().Profile
    });
    console.log(userImg);
    }

  if (!load) {
    return <Loader />;
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

      <MDBRow>
        <div>
          <MDBCol sm="4">
            <MDBCard className="VoterProfileCard">
              <MDBCardImage
                className="img-fluid voter-avatar"
                src={userImg}
                waves
              />
              <MDBCardBody>
                {/* <MDBCardTitle>Voter</MDBCardTitle> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Voter Portal</h1>

          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>
                Voter <img src={onlineiconimg} alt="online icon" />{" "}
              </MDBCardTitle>
              <MDBCardText>
                <MDBTable>
                  <MDBTableHead columns={column} />
                  <MDBTableBody rows={rows_outline_btn} />
                </MDBTable>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
