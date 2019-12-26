import React, { Component } from "react";
import "../App.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { useHistory } from "react-router-dom";

function LandingPage() {
  let history = useHistory();

  function Home() {
    history.push("/Home");
  }

  function RegisterVoter() {
    history.push("/RegisterVoter");
  }

  function RegisterCandidate() {
    history.push("/RegisterCandidate");
  }
  function AdminLogin() {
    history.push("/AdminLogin");
  }
  function LoginVoter() {
    history.push("/LoginVoter");
  }
  function LandingPage() {
    history.push("/");
  }

  return (
    <div class="background">
      <div class="Landingpg">
        <div className="navbar1">
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand dvp-font">Decentralized Voting Platform</a>

            <div
              class="collapse navbar-collapse "
              id="navbarSupportedContent navlist"
            >
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active ">
                  <a href="" class="nav-link " onClick={Home}>
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href=""
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Registraction
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a href="" class="dropdown-item" onClick={RegisterVoter}>
                      For Voter
                    </a>
                    <a
                      href=""
                      class="dropdown-item"
                      onClick={RegisterCandidate}
                    >
                      For Condidate
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    href=""
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a href="" class="dropdown-item" onClick={LoginVoter}>
                      For Voter
                    </a>
                    <a href="" class="dropdown-item">
                      For Condidate
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link" onClick={AdminLogin}>
                    Admin Panal
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="bgImg">
          <div className="heading">
            <h1 className="heading1">Welcome to </h1>
            <h3 className="heading2">Decentralized Voting Platform</h3>
          </div>
        </div>
      </div>

      <div className="secView">
        <h1 className="secViewHeading">Our Services</h1>
        <div>
          <div class="row">
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secView">
        <h1 className="secViewHeading">Key Features</h1>
        <div>
          <div class="card-group">
            <div class="card card-border">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div class="card card-border">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div class="card card-border">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secView">
        <h1 className="secViewHeading">Our Services</h1>
        <div>
          <div class="row">
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="secView">
        <h1 className="secViewHeading">Our Services</h1>
        <div>
          <div class="row">
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="col-6">
              <p className="paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <MDBFooter color="blue" className="font-small pt-4 mt-4 footer-color">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title color-white">Footer Content</h5>
                <p className="color-white">
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6" className="color-white">
                <h5 className="title color-white">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a>Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a>Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a>Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a>Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3 color-white">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a onClick={LandingPage}> Decentralizedvotingplateform.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}
export default LandingPage;
