
import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./../App.css";
import * as firebase from "firebase";


export default function CandidatePortal(props) {
  let history = useHistory();
  
  var user = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (!user) {
      history.push("/LoginCandidate");
    } else {
      // var userId = firebase.auth().currentUser.uid;
      console.log("From VoterPortal",user);
    }
  });
  // var userId = firebase.auth().currentUser.uid;
  //     console.log(userId);


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

  function CandidatePortal(){
    history.push("/CandidatePortal");
  }

  

  function CanListCan(){
    history.push("/CanListCan"/*,{userId}*/);
  }

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
              <strong className="white-text">Candidate Portal</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ />
            <MDBCollapse
              id="navbarCollapse3"
              /*isOpen={this.state.isOpen}*/ navbar
            >
              <MDBNavbarNav className="navbar-voterPanal-navlist" left>
                <MDBNavItem className="navItmes-voterProtal" active>
                  <MDBNavLink to="" onClick={CandidatePortal}>Dashboard</MDBNavLink>
                </MDBNavItem>
    
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="" onClick={CanListCan} >Candidates list</MDBNavLink>
                </MDBNavItem>
                
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem className="navItmes-voterProtal">
                  <MDBNavLink to="" onClick={SignOut}>SignOut</MDBNavLink>
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
                <MDBCardTitle>Candidate</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <MDBCol sm="8">
          <h1 className="admin-heading">Welcome to Candidate Portal</h1>
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
/*

  // });
  // firebase
  //   .database()
  //   .ref("voters")
  //   .on("value", snapshot => {
  //     snapshot.forEach(v =>{
  //       // console.log("ForEach suru hone se phael ");
  //       if(v.val().isRegistered === "false"){
  //         console.log(v.val().Uid +"n"+ v.val().name +"*********");
  //       }
  //     })
  //     });

  // firebase
  //   .database()
  //   .ref("voters")
  //   .on("value", snapshot => {
  //     snapshot.forEach(v => {
  //       // console.log("ForEach suru hone se phael ");
  //       if (v.val().isRegistered === "false") {
  //         console.log(v.val().Uid + "n" + v.val().name + "*********");
  //       }
  //     });
  //   });

  // useEffect(() => {
  //   if (!user) {
  //     history.push("/AdminLogin");
  //   } else {
  //     // let userId = firebase.auth().currentUser.uid;
  //     // console.log(userId);
  //   }
  // });

  // function candidateList() {
  //   history.push("/CandidateListAdmin");
  // }
  // // function NoListAvaliable(){
  // //   history.push("/NoListAvaliable");
  // // }
  // function AdminPanal() {
  //   history.push("/AdminPanal");
  // }
  // function SignOut() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       history.push("/AdminLogin");
  //     })
  //     .catch(error => {
  //       alert(error.message);
  //     });
  // }

  // // notVerified = () => {
  // // }

  // const columns = [
  //   {
  //     label: "Name",
  //     field: "name",
  //     sort: "asc"
  //   },
  //   {
  //     label: "Email",
  //     field: "email",
  //     sort: "asc"
  //   },
  //   {
  //     label: "Gender",
  //     field: "gender",
  //     sort: "asc"
  //   },
  //   {
  //     label: "CNIC",
  //     field: "cnic",
  //     sort: "asc"
  //   },
  //   {
  //     label: "Approval",
  //     field: "approval",
  //     sort: "asc"
  //   }
  // ];
  // let rows_outline_btn = [];
  // firebase
  //   .database()
  //   .ref("voters")
  //   .on("value", snapshot => {
  //     snapshot.forEach(v => {
  //       // console.log("ForEach suru hone se phael ");
  //       if (v.val().isRegistered === "false") {
  //         rows_outline_btn.push({
  //           name: v.val().name,
  //           email: v.val().email,
  //           gender: v.val().gender,
  //           cnic: v.val().cnic,
  //           Approval: (
  //             // <a onClick ={ReviewProfile(v.val().Uid)}>View</a>
  //             <Button
  //               variant="primary"
  //               onClick={e => {
  //                 // ReviewProfile(v.val());
  //                 history.push({
  //                   pathname: "/ReviewProfile",
  //                   state: { userid: v.val().Uid }
  //                 });
  //               }}
  //             >
  //               View
  //             </Button>
  //             // <MDBBtn color="purple" outline size="sm">
  //             //   View
  //             // </MDBBtn>
  //           )
  //         });
  //       }
  //     });
  //   });
    
  // // rows_outline_btn.forEach((item) => {
  // //   console.log(item);
  // // })

  // return (
  //   <div>
  //     <div>
  //       <Router>
  //         <MDBNavbar className="navbar-AdminPanal" dark expand="md">
  //           <MDBNavbarBrand>
  //             <strong className="white-text">Admin Panal</strong>
  //           </MDBNavbarBrand>
  //           <MDBNavbarToggler /*onClick={this.toggleCollapse}*/ //>
  //           <MDBCollapse
  //             id="navbarCollapse3"
  //             /*isOpen={this.state.isOpen}*/ navbar
  //           >
  //             <MDBNavbarNav className="navbar-Adminpanal-navlist" left>
  //               <MDBNavItem className="navItmes-Adminpanal" active>
  //                 <MDBNavLink to="" onClick={AdminPanal}>
  //                   Dashboard
  //                 </MDBNavLink>
  //               </MDBNavItem>
  //               <MDBNavItem className="navItmes-Adminpanal">
  //                 <MDBDropdown>
  //                   <MDBDropdownToggle nav caret>
  //                     <div className="d-none d-md-inline">Request List</div>
  //                   </MDBDropdownToggle>
  //                   <MDBDropdownMenu className="dropdown-default">
  //                     <MDBDropdownItem href="" onClick={candidateList}>
  //                       Voters Request
  //                     </MDBDropdownItem>
  //                     <MDBDropdownItem href="">
  //                       Candidates Requests
  //                     </MDBDropdownItem>
  //                   </MDBDropdownMenu>
  //                 </MDBDropdown>
  //               </MDBNavItem>
  //               <MDBNavItem className="navItmes-Adminpanal">
  //                 <MDBNavLink to="">Election</MDBNavLink>
  //               </MDBNavItem>
  //             </MDBNavbarNav>
  //             <MDBNavbarNav right>
  //               <MDBNavItem className="navItmes-Adminpanal">
  //                 <MDBNavLink to="" onClick={SignOut}>
  //                   SignOut
  //                 </MDBNavLink>
  //               </MDBNavItem>
  //             </MDBNavbarNav>
  //           </MDBCollapse>
  //         </MDBNavbar>
  //       </Router>
  //     </div>
  //     <MDBTable btn>
  //       <MDBTableHead columns={columns} />
  //       <MDBTableBody rows={rows_outline_btn} />
  //     </MDBTable>
  //   </div>
  // ); 


