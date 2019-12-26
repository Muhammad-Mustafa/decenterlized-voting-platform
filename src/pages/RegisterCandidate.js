import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "../App.css";
import DatePicker from "react-datepicker";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDatePicker } from "mdbreact";
// import MDBDatePicker from './DatePickerPage'
export default function RegisterCandidate() {
  const [startDate, setStartDate] = useState(new Date());
  let history = useHistory();
  

  return (
    <div class="background">
      <div class="Landingpg123">
        {/* <div className="navbar1">
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand dvp-font">Decentralized Voting Platform</a>
            <a class="navbar-brand voter-reg">Voters Registraction</a>
          </nav>{" "}
        </div>{" "} */}
        <div className="reg-candidate-bgImg">
          <p class=" voter-reg">Register Candidate</p>

          <div class="row">
            <div class="col-5 bdrr">
              <h1>Take your picture</h1>
              <div className="photo"></div>
              <button type="button" class="btn btn-primary btn-lg submitbtn">
                Click here to take picture
              </button>
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
                      />
                    </div>
                    <div class="form-group">
                      <label for="usrEmail">Your Email:</label>
                      <input
                        type="email"
                        class="form-control txtwidth"
                        id="usrEmail"
                        placeholder="abc@gmail.com"
                      />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input
                        type="password"
                        class="form-control txtwidth"
                        id="pwd"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="usrEmail">Name of Political Party:</label>

                      <input
                        type="text"
                        class="form-control txtwidth"
                        id="userppname"
                        placeholder="Your Full Party Name"
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
                      />
                    </div>

                    <div class="form-group">
                      <label for="Gender">Gender: </label>
                    </div>

                    <div class="form-check-inline ">
                      <label class="form-check-label ">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optradio"
                        />
                        Male
                      </label>
                    </div>
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optradio"
                        />
                        Female
                      </label>
                    </div>
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optradio"
                        />
                        Others
                      </label>
                    </div>

                    <div class="form-group ">
                      <label for="Position" className="marginPosi">
                        Position:
                      </label>
                    </div>

                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optradio"
                        />
                        Individual Candidate
                      </label>
                    </div>
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optradio"
                        />
                        Party Candidate
                      </label>
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
                        />
                      </p>
                    </div>
                    <p>Upload your Alloted Icon: </p>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroupFileAddon01"
                        >
                          Upload
                        </span>
                      </div>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary sbmtbtn">
                  submit
                </button>
                <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
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
  );
}
