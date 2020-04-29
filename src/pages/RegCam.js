import React, { useState } from "react";
import Webcam from "react-webcam";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
export default function RegCam(props) {
  let history = useHistory();

  function Home() {
    history.push("/Home");
  }
  console.log(props.location.state);

  /* Code of Camera Starts */
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  var imgCount = "";
  var imgURL = "";

  const webcamRef = React.useRef(null);

  async function getImageCounter() {
    console.log("Start 1");

    await firebase
      .database()
      .ref("Counter/")
      .once("value")
      .then(function (snapshot) {
        imgCount = snapshot.val().Count;
        // console.log("snapshot.val().Count  " + snapshot.val().Count);
        console.log("f1");
      });
  }

  async function uploadImage(imageSrc) {
    console.log("Start 2");
    var uploadTask = firebase.storage().ref();
    await uploadTask
      .child("pic" + imgCount)
      .putString(imageSrc, "data_url")
      .then(function (snapshot) {
        // console.log("Uploaded a data_url string!");
        console.log("f2");
      });
  }

  async function getURL() {
    console.log("Start 3");
    var url = firebase.storage().ref();

    await url
      .child("pic" + imgCount)
      .getDownloadURL()
      .then(function (downloadURL) {
        imgURL = downloadURL;
        console.log("File available at", imgURL);
        console.log("f3");
      });
  }

  function updateCounter() {
    console.log("Start 4");
    imgCount++;
    firebase.database().ref("Counter/").set({
      Count: imgCount,
    });
    console.log("f4");
  }
  async function createUser() {
    // console.log(
    //   "name:" +
    //     props.location.state.username +
    //     "email:" +
    //     props.location.state.email +
    //     // password: password,
    //     "cnic:" +
    //     props.location.state.cnic +
    //     "gender:" +
    //     JSON.stringify(props.location.state.gender) +
    //     "dob:" +
    //     props.location.state.dob +
    //     "constituency:" +
    //     JSON.stringify(props.location.state.constituency) +
    //     "isVoted:" +
    //     JSON.stringify(props.location.state.isVoted) +
    //     "isRegistered:" +
    //     JSON.stringify(props.location.state.isRegistered) +
    //     "Profile:" +
    //     imgURL
    // );

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        props.location.state.email,
        props.location.state.password
      )
      .then((response) => {
        var userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("voters/" + userId)
          .set({
            name: props.location.state.username,
            email: props.location.state.email,
            cnic: props.location.state.cnic,
            gender: props.location.state.gender,
            dob: props.location.state.dob,
            constituency: props.location.state.constituency,
            isVoted: props.location.state.isVoted,
            isRegistered: props.location.state.isRegistered,
            Uid: userId,
            Profile: imgURL,
          });
        //redirect to Login
      })
      .then(() => {
        alert("Your Registration Request is submited sucessfully!");
        Home();
      })
      .catch(function (error) {
        alert(error.message);
        console.log(error.message);
      });
  }

  async function capture() {
    // this will get the base64 code of the image
    // setisLoading("true");
    const imageSrc = webcamRef.current.getScreenshot();
    await getImageCounter();
    console.log("yahan aa gaya ");
    await uploadImage(imageSrc);
    await getURL();
    await updateCounter();
    // setisLoading("false");
    await createUser();
  }

  /*Code of Camra Ends*/

  return (
    <div>
      <div>
        <div>
          <div className="Landingpg123">
            <div className="background-blur">
              <div className="reg-voter-bgImg center">
                <p class="voter-reg">Voters Registraction </p>
                <h1>Take your picture</h1>
                <div>
                  <Webcam
                    className="webcam"
                    audio={false}
                    ref={webcamRef}
                    mirrored={true}
                    screenshotQuality={1}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />
                </div>
                <div>
                  {" "}
                  <button
                    onClick={capture}
                    type="button"
                    class="btn btn-primary btn-lg submitbtn bbtn"
                  >
                    Click here to take picture
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
