import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Webcam from "react-webcam";
import {
  loadModels,
  getFullFaceDescription,
  createMatcher,
  euc
} from "../api/face";
import DrawBox from "../components/drawBox";
import { JSON_PROFILE } from "../common/profile";

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;
const testImg = require("../img/s1.jpg");

class CameraFaceDetect extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
    this.state = {
      fullDescVid: [],
      faceMatcherVid: [],
      facingMode: null,
      imageURL: null,
      WIDTH: null,
      HEIGHT: 0,
      fullDesc: null
    };
  }

  componentWillMount() {
    loadModels();
    this.setInputDevice();
    this.matcher();
    this.mounting();

    console.log(this.props)
  }

  mounting = async () => {
    await loadModels();
    await this.matcher();
    await this.getImageDimension(testImg);
    await this.setState({ imageURL: testImg, loading: true });
    await this.handleImageChange(testImg);
  };
  getImageDimension = imageURL => {
    let img = new Image();
    img.onload = () => {
      let HEIGHT = (this.state.WIDTH * img.height) / img.width;
      this.setState({
        HEIGHT,
        imageDimension: {
          width: img.width,
          height: img.height
        }
      });
    };
    img.src = imageURL;
  };
  handleImageChange = async (image = this.state.imageURL) => {
    await this.getImageDimension(image);
    await getFullFaceDescription(image).then(fullDesc => {
      this.setState({ fullDesc, loading: false });
      // this.mounting2();
    });
  };
  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === "videoinput"
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: "user"
        });
      } else {
        await this.setState({
          facingMode: { exact: "environment" }
        });
      }
      this.startCapture();
    });
  };

  matcher = async () => {
    const faceMatcherVid = await createMatcher(JSON_PROFILE);
    this.setState({ faceMatcherVid });
  };

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  capture = async () => {
    console.log("-------")
    if (!!this.webcam.current) {
      console.log("===========================")
      await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then(fullDescVid => {
        console.log("wwwwwwwww", fullDescVid);
        this.setState({ fullDescVid });
      });
    }
  };

  verify = async () => {
    if (this.state.fullDescVid.length > 0) {
      let isVerified = await euc(
        this.state.fullDescVid[0]._descriptor,
        this.state.fullDesc[0]._descriptor
      );
      if(isVerified >=0 && isVerified <0.5){
          if(this.props.history.location.state.userType === "voter"){
        this.props.history.push("/VoterPortal")
      }
      else{
        this.props.history.push("/CandidatePortal")
      }
    }
    }
    else{
      console.log("no face detected");
    }
  };

  render() {
    const { fullDescVid, faceMatcherVid, facingMode } = this.state;
    let videoConstraints = null;
    let camera = "";
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      if (facingMode === "user") {
        camera = "Front";
      } else {
        camera = "Back";
      }
    }

    return (

    //   <div>
    //   <div className="Landingpg123">
    //     <div className="background-blur">
    //       <div className="reg-voter-bgImg center">
    //         <p class="voter-reg">Voters Registraction </p>
    //         <h1>Take your picture</h1>
    //         <div>
    //           <Webcam
    //             className="webcam"
    //             audio={false}
    //             ref={webcamRef}
    //             mirrored={true}
    //             screenshotQuality={1}
    //             screenshotFormat="image/jpeg"
    //             videoConstraints={videoConstraints}
    //           />
    //         </div>
    //         <div>
    //           {" "}
    //           <button
    //             onClick={capture}
    //             type="button"
    //             class="btn btn-primary btn-lg submitbtn bbtn"
    //           >
    //             Click here to take picture
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

      <div className="reg-voter-bgImg">

      <h1 className="h1r">Face Recognition </h1>
      <div
        className="Camera"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* <p>Camera: {camera}</p> */}
        <div
          style={{
            width: WIDTH,
            height: HEIGHT
          }}
        >
          <div style={{ position: "relative", width: WIDTH }}>
            {!!videoConstraints ? (
              <div style={{ position: "absolute" }}>
                <Webcam
                  audio={false}
                  width={WIDTH}
                  height={HEIGHT}
                  ref={this.webcam}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
              </div>
            ) : null}
            {!!fullDescVid ? (
              <DrawBox
                fullDescVid={fullDescVid}
                faceMatcherVid={faceMatcherVid}
                imageWidth={WIDTH}
                boxColor={"blue"}
              />
            ) : null}
          </div>
        </div>
        <button onClick={() => this.verify()} className="btn btn-primary btn-lg submitbtn bbtn bt1">
          Click here to take the Picture
          </button>

      </div>
      </div>
    );
  }
}

export default withRouter(CameraFaceDetect);
