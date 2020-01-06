import React, { useState } from "react";
import "../App.css";
import * as firebase from "firebase";
import { useHistory } from "react-router-dom";
import { isNullOrUndefined } from "util";

export default function AdminLogin() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SignIn() {
    if (email === "") {
      alert("Please Enter Your Email");
    } else if (password === "") {
      alert("Please Enter Your Password");
    } else {
      //this will serach All the nodes until it finds the email after if finds the email
      //on the admin table it will auth the admin and then login
      var ref = firebase.database().ref();
      ref
        .child("admin")
        .orderByChild("email")
        .equalTo(email)
        .on("value", function(snapshot) {
          //the data is reciving here
          if (!isNullOrUndefined(snapshot.val())) {
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(user => {
                console.log(snapshot.val());
                history.push("/AdminPanal");
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
        });
    }
  }

  return (
    <div className="admin-bgImg">
      <p class=" voter-reg">Admin Login</p>{" "}
      <div class="Admincard">
        <div class="container">
          <div className="bdrbox">
            <form>
              <div class="form-group">
                <label for="usrEmail">Your Email:</label>
                <input
                  type="email"
                  class="form-control txtwidth"
                  id="usrEmail"
                  name="email"
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
                  name="password"
                  placeholder="Your Password"
                  onChange={event => setPassword(event.target.value)}
                />
              </div>{" "}
              <button
                type="button"
                class="btn btn-primary adminsbmtbtn"
                onClick={SignIn}
              >
                Login
              </button>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
