import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RadioGroup, Radio } from "react-radio-group";
import "../App.css";
import DatePicker from "react-datepicker";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";

import * as firebase from "firebase";
// import MDBDatePicker from './DatePickerPage'
export default function RegisterCandidate() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PoliticalParty, setPoliticalParty] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [constituency, setConstituency] = useState("");
  const [isRegistered] = useState("false");

  let history = useHistory();
  function Home() {
    history.push("/Home");
  }
  function LoginCandidate() {
    history.push("/LoginCandidate");
  }

  function CandidateReg() {
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
        "Party = " +
        PoliticalParty +
        "\n" +
        "isRegistered = " +
        isRegistered +
        "\n"
    );

    function validateName(name) {
      var isValidName = true;
      if (/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
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
    } else if (PoliticalParty == "") {
      alert("Please select your PoliticalParty! ");
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
    } else if (validateName(username) === false) {
      alert("You cannot use !@#$%^& or Digits in Username !!!!");
    } else {
      history.push("/RegCamCandidate",{
        username:username,
          email: email,
          password:password,
          cnic: CNIC,
          gender: gender,
          dob: DOB,
          constituency: constituency,
          politicalParty: PoliticalParty,
          isRegistered: isRegistered
      });
  
    
    }
  }
  return (
    <div class="background">
      <div class="Landingpg123">
        <div className="reg-candidate-bgImg">
          <p class=" voter-reg">Register Candidate</p>
          <div class="row">
            <div class="col-5 bdrr">
              {/* <h1>Take your picture</h1>
              <div className="photoCandidate"></div>
              <button type="button" class="btn btn-primary btn-lg submitbtn">
                Click here to take picture
              </button> */}
            </div>
            <div class="col-7">
              <h1 className="signup-txt">Sign Up Form </h1>
              <div class="card ">
                <div class="container">
                  <div className="bdrbox">
                    <div class="form-group">
                      <label for="usrName">Your Name:</label>
                      <input
                        type="text"
                        class="form-control txtwidth"
                        id="usrName"
                        placeholder="Full Name"
                        onChange={event => setUsername(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="usrEmail">Your Email:</label>
                      <input
                        type="email"
                        class="form-control txtwidth"
                        id="usrEmail"
                        placeholder="abc@gmail.com"
                        onChange={event => setEmail(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input
                        type="password"
                        class="form-control txtwidth"
                        id="pwd"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="usrEmail">Name of Political Party:</label>
                      <div>
                        <select
                          className="Political-Party-list"
                          onClick={event =>
                            setPoliticalParty(event.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option
                            value="PTI"
                            onSelect={event =>
                              setPoliticalParty(event.target.value)
                            }
                          >
                            PTI
                          </option>
                          <option
                            value="PPP"
                            onClick={event =>
                              setPoliticalParty(event.target.value)
                            }
                          >
                            PPP
                          </option>
                          <option
                            value="PMLN"
                            onClick={event =>
                              setPoliticalParty(event.target.value)
                            }
                          >
                            PMLN
                          </option>
                          <option
                            value="Independent"
                            onClick={event =>
                              setPoliticalParty(event.target.value)
                            }
                          >
                            Independent
                          </option>
                        </select>
                      </div>
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
                      <label for="usrCnic">Identity Number (CNIC):</label>
                      <p>eg:1212121212121</p>
                      <input
                        type="text"
                        class="form-control txtwidth"
                        id="usrCnic"
                        placeholder="1212121212121"
                        onChange={event => setCNIC(event.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="Gender">Gender: </label>
                    </div>

                    <RadioGroup name="gender">
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
                    <label for="usrConstituency">Your Constituency:</label>

                    <p>
                      {" "}
                      NA-
                      <input
                        type="text"
                        class="form-control txtwidth"
                        id="usrName"
                        placeholder="eg:1, 15 (Only Number Required)"
                        // onChange={this.myChangeHandler}
                        onChange={event => setConstituency(event.target.value)}
                      />
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary sbmtbtn"
                    onClick={CandidateReg}
                  >
                    Submit
                  </button>
                  <MDBCol md="12">
                    <p className="font-small white-text d-flex justify-content-end">
                      Have an account?
                      <a
                        href=""
                        onClick={LoginCandidate}
                        className="green-text ml-1 font-weight-bold"
                      >
                        Log in
                      </a>
                    </p>
                  </MDBCol>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
