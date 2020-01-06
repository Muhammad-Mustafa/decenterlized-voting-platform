import React from "react";
import starImg from "../assets/star.png";
import faceID from "../assets/faceID.jpg";
import eth from "../assets/eth.png";
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
  function LoginCandidate() {
    history.push("/LoginCandidate");
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
                      For Candidate
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
                    <a href="" class="dropdown-item" onClick={LoginCandidate}>
                      For Candidate
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
      <hr />
      <div className="secView">
        <h1 className="secViewHeading" id="abt">
          About us
        </h1>
        <div>
          <div class="row">
            <div class="col-6">
              <p className="paragraph1">
                in centralized environments, the results of voting events have
                always been questionable and perceived differently by voters.
                Most existing E-Voting systems are based on centralized servers
                where the voters must trust the organizing authority for the
                integrity of the results, for a decentralized trustless voting
                platform that relies on Blockchain technology to solve the trust
                issues. The main features of this system include ensuring data
                integrity and transparency, and enforcing one vote per voter. To
                accomplish this, the Ethereum Virtual Machine (EVM) is used as
                the Blockchain runtime environment, on which transparent,
                consistent and deterministic smart contracts will be deployed by
                organizers for each voting event to run the voting rules. Users
                are authenticated through Email and faceID.
              </p>
            </div>
            <div class="col-6">
              <img className="imgstr" src={starImg} alt="IMG" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="secView">
        <h1 className="secViewHeading">Key Features</h1>
        <div>
          <div class="row">
            <div class="col-6">
              <img className="imgface" src={faceID} alt="IMG" />
            </div>
            <div class="col-6">
              <p className="paragraph1">
                Face verification and face dectection is a security feature for
                the verification of the voter and the candidate on the time of
                registraction we requir voter and candidate to submit their
                face-id along with the registraction so that we can check on the
                time of login that the voter or candidate who is logging is
                registered and authenticated or not.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="secView">
        <h1 className="secViewHeading">Ethreum Blockchain</h1>
        <div>
          <div class="row">
            <div class="col-6">
              <p className="paragraph1">
                These decentralized applications (or “dapps”) gain the benefits
                of cryptocurrency and blockchain technology. They can be
                trustworthy, meaning that once they are “uploaded” to Ethereum,
                they will always run as programmed. They can control digital
                assets in order to create new kinds of financial applications.
                They can be decentralized, meaning that no single entity or
                person controls them.
              </p>
            </div>
            <div class="col-6">
              <img className="imgeth" src={eth} alt="IMG" />
            </div>
          </div>
        </div>
        <MDBFooter color="blue" className="font-small pt-4 mt-4 footer-color">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title color-white">
                  Decentralized voting plateform
                </h5>
                <p className="color-white">
                  Here you can access some of the links
                </p>
              </MDBCol>
              <MDBCol md="6" className="color-white">
                <h5 className="title color-white">Links to Follow</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="" onClick={RegisterVoter}>
                      Register Voter{" "}
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="" onClick={RegisterCandidate}>
                      Register Candidate
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="" onClick={LoginVoter}>
                      Login Voter{" "}
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="" onClick={LoginCandidate}>
                      Login Candidate
                    </a>
                  </li>

                  <li className="list-unstyled">
                    <a href="" onClick={AdminLogin}>
                      Admin Panal
                    </a>
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
