import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";
import { useHistory } from "react-router-dom";
// import auth from "./auth";
import { isNullOrUndefined } from "util";

import * as firebase from "firebase";

export default function LoginVoter() {
  // firebase.auth().signOut()

  localStorage.clear();
  let history = useHistory();

  function RegisterVoter() {
    history.push("/RegisterVoter");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login() {
    if (email == "") {
      alert("Please Enter your Email! ");
    } else if (password == "") {
      alert("Please Enter your Password! ");
    } else {
      let ref = firebase.database().ref();
      ref
        .child("voters")
        .orderByChild("email")
        .equalTo(email)
        .on("value", function(snapshot) {
          //the data is reciving here
          if (!isNullOrUndefined(snapshot.val())) {
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(u => {
                // if(snapshot.val().isRegistered == false){
                let userId = firebase.auth().currentUser.uid;
                console.log(userId);
                firebase
                  .database()
                  .ref("/voters/" + userId)
                  .once("value")
                  .then(function(snapshot) {
                    if (snapshot.val().isRegistered == "false") {
                      firebase
                        .auth()
                        .signOut()
                        .then(function() {
                          alert(
                            "Your registraction is still in the process Please try later"
                          );

                          history.push("/");
                        })
                        .catch(error => {
                          alert(error.message);
                        });
                    } else {
                      history.push("/VoterPortal");
                    }
                  })
                  .catch(error => {
                    alert(error.message);
                  });

                // }
                // console.log(snapshot.val().uid);
                // history.push("/VoterPortal");
              })
              .catch(function(error) {
                alert(error.message);
              });
            // console.log(snapshot.val());
            // snapshot.forEach(function(data) {
            //     console.log(data.key);
            // });
          } else {
            alert("Wrong Email!");
          }
          // console.log(snapshot.val());

          // var ref = firebase.database().ref();
          // ref
          //   .child("Voter")
          //   .orderByChild("email")
          //   .equalTo(email)
          //   .on("value", function(snapshot) {
          //     if (isNullOrUndefined(snapshot.val())) {
          //       alert("Can't find Email!");
          //     } else {
          // console.log("running")
          // firebase
          //   .auth()
          //   .signInWithEmailAndPassword(email, password)
          //   .then(user => {
          //     // console.log("user",user)
          //     firebase
          //       .database()
          //       .ref(`users/${user.user.uid}`)
          //       .once("value", val => {
          //         // console.log(val.val())
          //         // val.forEach(v => {
          //         if (val.val().type === "voter") {
          //           // history.push("/VoterPortal",{user: val.val()});
          //           let isTrue = true;
          //           localStorage.setItem("isLoggedin", isTrue);
          //           history.push({
          //             pathname: "/VoterPortal",
          //             state: { user: val.val() }
          //           });
          //         }
          //         // });
          //       });
          //     // auth.login(() => {
          //     //   history.push("/VoterPortal");
          //     // });
          //   })
          //   .catch(function(error) {
          //     alert(error.message);
          //   });
          //     //   .then(() => {});
          //     console.log(snapshot.val());
          //     // snapshot.forEach(function(data) {
          //     //     console.log(data.key);
          //     // });
          //   }
          // });
        });
    }
  }

  return (
    <div>
      <div class="background">
        <div className="Landingpg123">
          <div className="background-blur">
            <div className="reg-voter-bgImg">
              <p class="voter-reg">Voters Login</p>
              <form /*onSubmit={this.mySubmitHandler}*/>
                <MDBContainer>
                  <MDBRow>
                    {/* <div class="col-5 bdrr"> */}
                    <MDBCol lg="5">
                      <h1>Take your picture</h1>
                      <div className="photo"></div>
                      <button
                        type="button"
                        class="btn btn-primary btn-lg submitbtn"
                      >
                        Click here to take picture
                      </button>
                      {/* </div> */}
                    </MDBCol>
                    {/* <div class="col-7"> */}
                    <MDBCol lg="7">
                      <h1 className="signup-txt">Sign Up Form </h1>
                      <div class="cardLgVoter">
                        <div class="container">
                          <div className="bdrbox">
                            <div class="form-group">
                              <label for="usrEmail">Your Email:</label>
                              <input
                                type="email"
                                class="form-control txtwidth"
                                id="usrEmail"
                                name="email"
                                placeholder="abc@gmail.com"
                                // onChange={this.myChangeHandler}
                                onChange={event => setEmail(event.target.value)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="pwd">Password:</label>
                              <input
                                type="password"
                                class="form-control txtwidth"
                                id="pwd"
                                name="password"
                                placeholder="Your Password"
                                // onChange={this.myChangeHandler}
                                onChange={event =>
                                  setPassword(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          class="btn btn-primary sbmtbtn"
                          onClick={Login}
                        >
                          submit
                        </button>
                        <MDBCol md="12">
                          <p className="font-small white-text d-flex justify-content-end">
                            Don't have an account?
                            <a
                              href="#!"
                              className="green-text ml-1 font-weight-bold"
                              onClick={RegisterVoter}
                            >
                              SignUp
                            </a>
                          </p>
                        </MDBCol>
                      </div>
                      {/* </div> */}
                    </MDBCol>
                    {/* </div> */}
                  </MDBRow>
                </MDBContainer>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
