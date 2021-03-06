import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { RadioGroup, Radio } from "react-radio-group";
import * as firebase from "firebase";
// const storage = firebase.storage();
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
  const [image, SetImage] = useState("");
  const [url, setUrl] = useState("");

  async function handleChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      SetImage(image);
      const uploadTask = await firebase
        .storage()
        .ref(`images/${image.name}`)
        .put(image);

      var DURL = await uploadTask.ref.getDownloadURL();
      setUrl(DURL);
    }
  }

  function handleUpload() {
    // const { image } = this.state;
    const uploadTask = firebase.storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
    console.log(uploadTask.getDownloadURL);
  }

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
      if (/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
        isValidName = false;
      }
      return isValidName;
    }

    if (username == "") {
      alert("Please Enter Username!");
    }else if (email == "") {
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
    } else if (validateName(username) === false) {
      alert("You cannot use !@#$%^& or Digits in Username !!!!");
    }
    
    else {

      history.push("/RegCam",{
        username:username,
          email: email,
          password:password,
          cnic: CNIC,
          gender: gender,
          dob: DOB,
          constituency: constituency,
          isVoted: isVoted,
          isRegistered: isRegistered
      });

      
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(response => {
      //     if (username == "") {
      //     } else {
      //       var userId = firebase.auth().currentUser.uid;

      //       firebase
      //         .database()
      //         .ref("voters/" + userId)
      //         .set({
      //           name: username,
      //           email: email,
      //           // password: password,
      //           cnic: CNIC,
      //           gender: gender,
      //           dob: DOB,
      //           constituency: constituency,
      //           isVoted: isVoted,
      //           isRegistered: isRegistered,
      //           Uid: userId,
      //           Profile: url
      //         });
      //     }
      //     //redirect to Login
      //   })
      //   .then(() => {
      //     alert("Your Registration Request is submited sucessfully!");
      //     Home();
      //   })
      //   .catch(function(error) {
      //     alert(error.message);
      //   });
    }
  }
  return (
    <div class="background">
      <div className="Landingpg123">
        <div className="background-blur">
          <div className="reg-voter-bgImg">
            <p class=" voter-reg">Voters Registraction</p>
            <form>
              <MDBContainer>
                <MDBRow>
                  {/* <div class="col-5 bdrr"> */}
                  <MDBCol lg="5">
                    {/* <h1>Take your picture</h1>
                    <div className="photo"></div>
                    {/* <button
                      type="button"
                      className="btn btn-primary btn-lg submitbtn sbtnt"
                      onChange={handleChange}
                    > */}
                    {/* <input type="file" onChange={handleChange} />
                    Click here to take picture */}
                    {/* </button> */}
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
                              onChange={(event) =>
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
                              onChange={(event) => setEmail(event.target.value)}
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
                              onChange={(event) =>
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
                              onChange={(event) => setCNIC(event.target.value)}
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
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            />
                            Male
                            <Radio
                              className="gender-radio"
                              value="Female"
                              // onChange={this.myChangeHandler}
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            />
                            Female
                            <Radio
                              className="gender-radio"
                              value="Other"
                              // onChange={this.myChangeHandler}
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
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
                            onChange={(event) => setDOB(event.target.value)}
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
                              onChange={(event) =>
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
