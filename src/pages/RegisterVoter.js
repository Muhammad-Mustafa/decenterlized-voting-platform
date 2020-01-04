// import React, { Component } from "react";
// import "../App.css";
// import DatePicker from "react-datepicker";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";
// import { RadioGroup, Radio } from "react-radio-group";
// import {useHistory, useState} from 'react';
// // // import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";
// // import MDBDatePicker from './DatePickerPage'
// export default class RegisterVoter extends Component {
//   // const [startDate, setStartDate] = useState(new Date());

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       CNIC: null,
//       gender: "",
//       DOB: "",
//       constituency: null
//     };
//   }
//   myChangeHandler = event => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     let password = val.password;
//     let CNIC = event.target.CNIC;
//     let gender = event.target.gender;
//     let DOB = event.target.DOB;
//     let constituency = event.target.constituency;
//     // this.setState({username:nam,email:email})
//     console.log("my logs:==============" + val);
//     this.setState({ [nam]: val });
//   };

//   mySubmitHandler = event => {
//     event.preventDefault();
//     let username = this.state.username;
//     let email = this.state.email;
//     let password = this.state.password;
//     let CNIC = this.state.CNIC;
//     let gender = this.state.gender;
//     let DOB = this.state.DOB;
//     let constituency = this.state.constituency;

//     if (username == "") {
//       alert("Please Enter Your Name");
//     } else if (email == "") {
//       alert("Enter Your Email");
//     } else if (password == "") {
//       alert("Enter Your Password");
//     } else if (CNIC == null) {
//       alert("Enter Your CNIC");
//     } else if (CNIC == "") {
//       alert("Enter Your CNIC");
//     } else if (!Number(CNIC)) {
//       alert("Your CNIC must be a Number");
//     } else if (CNIC.Lenght > 0 && CNIC.Lenght <= 13) {
//       alert("Your CNIC must be of 13 Digit");
//     } else if (gender == "") {
//       alert("Enter Select Your Gender");
//     }
//     // else if(DOB == ""){
//     //   alert("Enter Your Date of Birth");
//     // }
//     else if (constituency == null) {
//       alert("Enter Your Constituency");
//     } else if (constituency == "") {
//       alert("Enter Your Constituency");
//     } else if (!Number(constituency)) {
//       alert("Your Constituency must be a Number");
//     }
//     //  else {
//     //   console.log(
//     //     "userName = " + username + " Email = " + email + "Pass = " + password
//     //   );
//     // }
//   };

//   render() {
//     return (
//       <div class="background">
//         <div className="Landingpg123">
//           <div className="background-blur">
//             {/* <div className="navbar1">
//           <nav class="navbar navbar-expand-lg navbar-light bg-light ">
//             <a class="navbar-brand dvp-font">Decentralized Voting Platform</a>
//             <a class="navbar-brand voter-reg">Voters Registraction</a>
//           </nav>{" "}
//         </div>{" "} */}
//             <div className="reg-voter-bgImg">
//               <p class=" voter-reg">Voters Registraction</p>
//               <form onSubmit={this.mySubmitHandler}>
//                 <div class="row">
//                   <div class="col-5 bdrr">
//                     <h1>Take your picture</h1>
//                     <div className="photo"></div>
//                     <button
//                       type="button"
//                       class="btn btn-primary btn-lg submitbtn"
//                     >
//                       Click here to take picture
//                     </button>
//                   </div>
//                   <div class="col-7">
//                     <h1 className="signup-txt">Sign Up Form </h1>
//                     <div class="card ">
//                       <div class="container">
//                         <div className="bdrbox">
//                           <div class="form-group">
//                             <label for="usrName">Your Name:</label>
//                             <input
//                               type="text"
//                               class="form-control txtwidth"
//                               id="usrName"
//                               name="username"
//                               placeholder="Full Name"
//                               onChange={this.myChangeHandler}
//                               // onChange={event => setUserName(event.target.value)}
//                             />
//                           </div>
//                           <div class="form-group">
//                             <label for="usrEmail">Your Email:</label>
//                             <input
//                               type="email"
//                               class="form-control txtwidth"
//                               id="usrEmail"
//                               name="email"
//                               placeholder="abc@gmail.com"
//                               onChange={this.myChangeHandler}
//                             />
//                           </div>
//                           <div class="form-group">
//                             <label for="pwd">Password:</label>
//                             <input
//                               type="password"
//                               class="form-control txtwidth"
//                               id="pwd"
//                               name="password"
//                               placeholder="Your Password"
//                               onChange={this.myChangeHandler}
//                             />
//                           </div>
//                           <div class="form-group">
//                             <label for="usrCnic">Identity Number (CNIC):</label>
//                             <p>eg:1212121212121</p>
//                             <input
//                               type="text"
//                               class="form-control txtwidth"
//                               id="usrCnic"
//                               placeholder="1212121212121"
//                               name="CNIC"
//                               onChange={this.myChangeHandler}
//                               required
//                             />
//                           </div>

//                           <div class="form-group">
//                             <label for="Gender">Gender: </label>
//                           </div>

//                           <RadioGroup
//                             name="gender"
//                             // gender={this.state.gender}
//                             // onChange={this.myChangeHandler}
//                           >
//                             <Radio
//                               className="gender-radio"
//                               value="Male"
//                               onChange={this.myChangeHandler}
//                             />
//                             Male
//                             <Radio
//                               className="gender-radio"
//                               value="Female"
//                               onChange={this.myChangeHandler}
//                             />
//                             Female
//                             <Radio
//                               className="gender-radio"
//                               value="Other"
//                               onChange={this.myChangeHandler}
//                             />
//                             Other
//                           </RadioGroup>

//                           {/* <div class="form-check-inline">
//                           <label class="form-check-label">
//                             <input
//                               type="radio"
//                               class="form-check-input"
//                               name="Male"
//                               checked={this.state.gender === "Male"}
//                             />
//                             Male
//                           </label>
//                         </div>
//                         <div class="form-check-inline">
//                           <label class="form-check-label">
//                             <input
//                               type="radio"
//                               class="form-check-input"
//                               name="Female"
//                               // onChange={this.myChangeHandler}
//                               checked={this.state.gender === "Female"}
//                             />
//                             Female
//                           </label>
//                         </div>
//                         <div class="form-check-inline"> */}
//                           {/* <label class="form-check-label">
//                             <input
//                               type="radio"
//                               class="form-check-input"
//                               name="Others"
//                               // onChange={this.myChangeHandler}
//                               checked = {this.state.gender === "Other"}
//                             />
//                             Others
//                           </label>
//                         </div> */}
//                         </div>
//                         <div class="form-group">
//                           <label for="usrDOB" className="dobtxt">
//                             Date of Birth:
//                           </label>
//                           <input
//                             type="date"
//                             class="form-control txtwidth"
//                             id="usrEmail"
//                             // onChange={this.myChangeHandler}
//                           />
//                         </div>
//                         <div class="form-group">
//                           <label for="usrConstituency">
//                             Your Constituency:
//                           </label>

//                           <p>
//                             {" "}
//                             NA-
//                             <input
//                               type="text"
//                               class="form-control txtwidth"
//                               id="usrName"
//                               placeholder="eg:1, 15 (Only Number Required)"
//                               onChange={this.myChangeHandler}
//                               required
//                             />
//                           </p>
//                         </div>
//                       </div>
//                       <button type="submit" class="btn btn-primary sbmtbtn">
//                         submit
//                       </button>
//                       <MDBCol md="12">
//                         <p className="font-small white-text d-flex justify-content-end">
//                           Have an account?
//                           <a
//                             href="#!"
//                             className="green-text ml-1 font-weight-bold"
//                           >
//                             Log in
//                           </a>
//                         </p>
//                       </MDBCol>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>{" "}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // import React, { Component } from 'react'

// // export default class RegisterVoter extends Component {
// //   render() {
// //     return (
// //       <div>

// //       </div>
// //     )
// //   }
// // }

// // For search

// // firebase.database().ref("MeetUp").orderByChild("Longitude").equalTo(this.state.longitude2).on("value", snapshot => {
// //   const data = snapshot.val()
// //   if (snapshot.val()) {
// //       const initMessages = [];
// //       Object
// //           .keys(data)
// //           .forEach(Filter => initMessages.push(data[Filter]));

// //       var reversed = initMessages.reverse()
// //       this.setState({
// //           FilterData: reversed,

// //       });
// //   }
// // });
// // });

// // getting collection of Data\

// // firebase
// //             .database()
// //             .ref('MeetUpBootcamp')
// //             .on("value", snapshot => {
// //                 const data = snapshot.val()
// //                 if (snapshot.val()) {
// //                     const initMessages = [];
// //                     Object
// //                         .keys(data)
// //                         .forEach(bootcamp => initMessages.push(data[bootcamp]));

// //                     var reversed = initMessages.reverse()
// //                     this.setState({
// //                         bootcamps: reversed,

// //                     });
// //                 }
// //             });

// // remove node

// // await firebase.database().ref('MeetUp').child(item.Node).remove(function (error) {
// //   if (!error) {
// //       Alert.alert("Deleted")
// //   }
// //   else if (error) {
// //       Alert.alert(error);
// //   }
// // })

// //Update

// // await firebase.database().ref('MeetUp').child(item.Node).update({ Report: "Clear" });

// //getting specific node

// // firebase.database().ref('users').child(item.User).once('value').then(function (snapshot) {
// //   ExpoToken = (snapshot.val() && snapshot.val().expoToken);
// // });

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";
import { RadioGroup, Radio } from "react-radio-group";
import * as firebase from "firebase";

export default function RegisterVoter() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [constituency, setConstituency] = useState("");
  const [isVoted] = useState("false");
  const [isRegistered] = useState("false");

  // var database = firebase.database().ref();
  var database = firebase.database();
  let history = useHistory();

  function Home() {
    history.push("/Home");
  }
  function LoginVoter() {
    history.push("LoginVoter");
  }

  function VoterReg() {
    console.log(
      "Username = " +
        username +
        "\n" +
        "Email = " +
        email +
        "\n" +
        "Password = " +
        password +
        "\n" +
        "CNIC = " +
        CNIC +
        "\n" +
        "Gender = " +
        gender +
        "\n" +
        "DOB = " +
        DOB +
        "\n" +
        "constituency = " +
        constituency +
        "\n" +
        "isVoted = " +
        isVoted +
        "\n" +
        "isRegistered = " +
        isRegistered +
        "\n"
    );
    function validateName(name) {
      var isValidName = true;
      if(/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
        isValidName = false;
      }
      return isValidName;
    }
    
    if (username == "") {
      alert("Please Enter Username!");
    } else if (email == "") {
      alert("Please Enter your Email! ");
    } else if (password == "") {
      alert("Please Enter your Password! ");
    } else if (CNIC == "") {
      alert("Please Enter your CNIC! ");
    } else if (gender == "") {
      alert("Please Select your Gender! ");
    } else if (DOB == "") {
      alert("Please Enter your Date of Birth! ");
    } else if (constituency == "") {
      alert("Please Enter your Constituency! ");
    } else if (!Number(constituency)) {
      alert("constituency must be a Number");
    } else if (!Number(CNIC)) {
      alert("CNIC must be a Number");
    } else if (Number(constituency) <= 0) {
      alert("Invalid Constituency !!");
    } else if (Number(constituency) >= 342) {
      alert("Invalid Constituency !!");
    } else if (Number(CNIC) < 1000000000000) {
      alert("Invalid CNIC number");
    } else if (Number(CNIC) > 9999999999999) {
      alert("Invalid CNIC number");
    }
    else if(validateName(username) === false){
      alert("You cannot use !@#$%^& or Digits in Username !!!!");
    }
     else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          if (username == "") {
          } else {
            var userId = firebase.auth().currentUser.uid;

            firebase
              .database()
              .ref("voters/" + userId)
              .set({
                name: username,
                email: email,
                password: password,
                cnic: CNIC,
                gender: gender,
                dob: DOB,
                constituency: constituency,
                isVoted: isVoted,
                isRegistered: isRegistered,
                Uid: userId
              });
          }
          //redirect to Login
        })
        .then(() => {
          alert("Your Registraction Request is submited sucessfully!");
          Home();
        })
        .catch(function(error) {
          alert(error.message);
        });
    }
  }

  // firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
  //   setLoading(false)
  //   var userId = firebase.auth().currentUser.uid

  //   firebase.database().ref('users/' + userId).set({
  //     Name: username,
  //     Email: email,
  //     Uid: userId
  //   });
  //   history.push("/Home");
  //   firebase.auth().currentUser.updateProfile({
  //     displayName: username,
  //   }).then(() => {

  //   }).catch(function (error) {
  //     alert(error.message);
  //   });

  // }).catch(function (error) {
  //   setLoading(false)
  //   alert(error.message);
  //   var errorCode = error.code;
  //   console.log("Error code:  " + errorCode);
  //   var errorMessage = error.message;
  //   console.log("Error Message:  " + errorMessage);
  // });

  return (
    <div class="background">
      <div className="Landingpg123">
        <div className="background-blur">
          <div className="reg-voter-bgImg">
            <p class=" voter-reg">Voters Registraction</p>
            <form /*onSubmit={this.mySubmitHandler}*/>
              <MDBContainer>
                <MDBRow>
                  {/* <div class="col-5 bdrr"> */}
                  <MDBCol lg="5">
                    <h1>Take your picture</h1>
                    <div className="photo"></div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg submitbtn sbtnt"
                    >
                      Click here to take picture
                    </button>
                    {/* </div> */}
                  </MDBCol>
                  {/* <div class="col-7"> */}
                  <MDBCol lg="7">
                    <h1 className="signup-txt">Sign Up Form </h1>
                    <div class="card ">
                      <div class="container">
                        <div className="bdrbox">
                          <div class="form-group">
                            <label for="usrName">Your Name:</label>
                            <input
                              type="text"
                              class="form-control txtwidth"
                              id="userName"
                              name="username"
                              placeholder="Full Name"
                              // onChange={this.myChangeHandler}
                              onChange={event =>
                                setUsername(event.target.value)
                              }
                            />
                          </div>
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
                          <div class="form-group">
                            <label for="usrCnic">Identity Number (CNIC):</label>
                            <p>eg:1212121212121</p>
                            <input
                              type="text"
                              class="form-control txtwidth"
                              id="usrCnic"
                              placeholder="1212121212121"
                              name="CNIC"
                              // onChange={this.myChangeHandler}
                              onChange={event => setCNIC(event.target.value)}
                            />
                          </div>

                          <div class="form-group">
                            <label for="Gender">Gender: </label>
                          </div>

                          <RadioGroup
                            name="gender"
                            // gender={this.state.gender}
                            // onChange={this.myChangeHandler}
                          >
                            <Radio
                              className="gender-radio"
                              value="Male"
                              // onChange={this.myChangeHandler}
                              onChange={event => setGender(event.target.value)}
                            />
                            Male
                            <Radio
                              className="gender-radio"
                              value="Female"
                              // onChange={this.myChangeHandler}
                              onChange={event => setGender(event.target.value)}
                            />
                            Female
                            <Radio
                              className="gender-radio"
                              value="Other"
                              // onChange={this.myChangeHandler}
                              onChange={event => setGender(event.target.value)}
                            />
                            Other
                          </RadioGroup>
                        </div>
                        <div class="form-group">
                          <label for="usrDOB" className="dobtxt">
                            Date of Birth:
                          </label>
                          <input
                            type="date"
                            class="form-control txtwidth"
                            id="usrEmail"
                            // onChange={this.myChangeHandler}
                            onChange={event => setDOB(event.target.value)}
                          />
                        </div>
                        <div class="form-group">
                          <label for="usrConstituency">
                            Your Constituency:
                          </label>

                          <p>
                            {" "}
                            NA-
                            <input
                              type="text"
                              class="form-control txtwidth"
                              id="usrName"
                              placeholder="eg:1, 15 (Only Number Required)"
                              // onChange={this.myChangeHandler}
                              onChange={event =>
                                setConstituency(event.target.value)
                              }
                            />
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary sbmtbtn"
                        onClick={VoterReg}
                      >
                        submit
                      </button>
                      <MDBCol md="12">
                        <p className="font-small white-text d-flex justify-content-end">
                          Have an account?
                          <a
                            href=""
                            className="green-text ml-1 font-weight-bold"
                            onClick={LoginVoter}
                          >
                            Log in
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
  );
}
