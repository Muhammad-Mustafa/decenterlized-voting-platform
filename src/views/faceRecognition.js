import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  loadModels,
  getFullFaceDescription,
  createMatcher,
  isFaceDetectionModelLoaded,
  euc
} from "../api/face";
import DrawBox from "../components/drawBox";
import ShowDescriptors from "../components/showDescriptors";
import { JSON_PROFILE } from "../common/profile";


import Webcam from 'react-webcam';

const MaxWidth = 600;
const boxColor = "#BE80B5";
const testImg = require("../img/i1.jpg");
const testImg2 = require("../img/s1.jpg");

const INIT_STATE = {
  url: null,
  imageURL: null,
  imageURL2: null,
  fullDesc: null,
  imageDimension: null,
  error: null,
  loading: false
};

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();

    this.state = {
      ...INIT_STATE,
      faceMatcher: null,
      showDescriptors: false,
      WIDTH: null,
      HEIGHT: 0,
      isModelLoaded: !!isFaceDetectionModelLoaded(),
      fullDescVid: null,
      faceMatcherVid: null,
      facingMode: null
    };
  }
  // webcam = webcam => {
  //   this.webcam = webcam;
  // };

  componentWillMount() {
    loadModels();
    this.setInputDevice();
    this.matcher();
    this.resetState();
    let _W = document.documentElement.clientWidth;
    if (_W > MaxWidth) _W = MaxWidth;
    this.setState({ WIDTH: _W });
    // this.euc();
    this.mounting();
    
  }

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  capture = async () => {
    if (!!this.webcam.current) {
      const a = await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      )
      console.log("==",a)
    }
  };

  euc = async (testImg1, testImg2) => {
    await euc(testImg1, testImg2);
  };

  mounting = async () => {
    await loadModels();
    await this.matcher();
    await this.getImageDimension(testImg);
    await this.setState({ imageURL: testImg, loading: true });
    await this.handleImageChange(testImg);
  };

  mounting2 = async () => {
    // await loadModels();
    // await this.matcher();
    // await this.getImageDimension(testImg2);
    // await this.setState({ imageURL2: testImg2, loading: true });
    // await this.handleImageChange2(testImg2);
  };

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === 'videoinput'
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: 'user'
        });
      } else {
        await this.setState({
          facingMode: { exact: 'environment' }
        });
      }
      this.startCapture();
    });
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  matcher = async () => {
    const faceMatcher = await createMatcher(JSON_PROFILE);
    this.setState({ faceMatcher });
  };

  handleFileChange = async event => {
    this.resetState();
    await this.setState({
      imageURL: URL.createObjectURL(event.target.files[0]),
      loading: true
    });
    this.handleImageChange();
  };

  handleURLChange = event => {
    this.setState({ url: event.target.value });
  };

  handleButtonClick = async () => {
    this.resetState();
    let blob = await fetch(this.state.url)
      .then(r => r.blob())
      .catch(error => this.setState({ error }));
    if (!!blob && blob.type.includes("image")) {
      this.setState({
        imageURL: URL.createObjectURL(blob),
        loading: true
      });
      this.handleImageChange();
    }
  };

  handleImageChange = async (image = this.state.imageURL) => {
    await this.getImageDimension(image);
    await getFullFaceDescription(image).then(fullDesc => {
      this.setState({ fullDesc, loading: false });
      // this.mounting2();
    });
  };

  handleImageChange2 = async (image = this.state.imageURL2) => {
    await this.getImageDimension(image);
    await getFullFaceDescription(image).then(fullDesc2 => {

      this.euc(this.state.fullDesc[0]._descriptor, fullDesc2[0]._descriptor)


      if (this.state.fullDesc === fullDesc2) {
        console.log("working");
      } else {
        // console.log("1",this.state.fullDesc);
        // console.log("22",fullDesc2);
      }
      this.setState({ fullDesc2, loading: false });
    });
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

  handleDescriptorsCheck = event => {
    this.setState({ showDescriptors: event.target.checked });
  };

  resetState = () => {
    this.setState({ ...INIT_STATE });
  };
  render() {
    const {
      WIDTH,
      HEIGHT,
      imageURL,
      fullDesc,
      faceMatcher,
      showDescriptors,
      isModelLoaded,
      error,
      loading
    } = this.state;

    // Display working status
    let status = <p>Status: Model Loaded = {isModelLoaded.toString()}</p>;
    if (!!error && error.toString() === "TypeError: Failed to fetch") {
      status = (
        <p style={{ color: "red" }}>Status: Error Failed to fetch Image URL</p>
      );
    } else if (loading) {
      status = <p style={{ color: "blue" }}>Status: LOADING...</p>;
    } else if (!!fullDesc && !!imageURL && !loading) {
      if (fullDesc.length < 2)
        status = <p>Status: {fullDesc.length} Face Detect</p>;
      if (fullDesc.length > 1)
        status = <p>Status: {fullDesc.length} Faces Detect</p>;
    }

    // Loading Spinner
    let spinner = (
      <div
        style={{
          margin: 0,
          color: "#BE80B5",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textShadow: "2px 2px 3px #fff"
        }}
      >
        <div className="loading" />
        <h3>Processing...</h3>
      </div>
    );


    const { fullDescVid, faceMatcherVid, facingMode } = this.state;
    let videoConstraints = null;
    let camera = '';
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      if (facingMode === 'user') {
        camera = 'Front';
      } else {
        camera = 'Back';
      }
    }
    
    // <div
    //   style={{
    //     position: "relative",
    //     width: WIDTH,
    //     height: HEIGHT
    //   }}
    // >
    //   {!!imageURL ? (
    //     <div
    //       style={{
    //         position: "relative"
    //       }}
    //     >
    //       <div style={{ position: "absolute" }}>
    //         <img style={{ width: WIDTH }} src={imageURL} alt="imageURL" />
    //       </div>
    //       {!!fullDesc ? (
    //         <DrawBox
    //           fullDesc={fullDesc}
    //           faceMatcher={faceMatcher}
    //           imageWidth={WIDTH}
    //           boxColor={boxColor}
    //         />
    //       ) : null}
    //     </div>
    //   ) : null}
    //   {loading ? spinner : null}
    // </div>


    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {status}
        <div
          style={{
            width: WIDTH,
            padding: 10,
            border: "solid",
            marginTop: 10
          }}
        >
          <p>Input Image file or URL</p>
          <input
            id="myFileUpload"
            type="file"
            onChange={this.handleFileChange}
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <div className="URLInput">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Place your photo URL here (only .jpg, .jpeg, .png)"
              pattern="https://.*"
              size="30"
              onChange={this.handleURLChange}
            />
            <button onClick={this.handleButtonClick}>Upload</button>
          </div>
          <div>
            <input
              name="descriptors"
              type="checkbox"
              checked={this.state.showDescriptors}
              onChange={this.handleDescriptorsCheck}
            />
            <label>Show Descriptors</label>
          </div>
          {!!showDescriptors ? <ShowDescriptors fullDesc={fullDesc} /> : null}
        </div>

        <div
        className="Camera"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p>Camera: {camera}</p>
        <div
          style={{
            width: WIDTH,
            height: HEIGHT
          }}
        >
          <div style={{ position: 'relative', width: WIDTH }}>
            {!!videoConstraints ? (
              <div style={{ position: 'absolute' }}>
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
                boxColor={'blue'}
              />
            ) : null}
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default withRouter(FaceRecognition);

/*


import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  loadModels,
  getFullFaceDescription,
  createMatcher,
  isFaceDetectionModelLoaded
} from "../api/face";
import DrawBox from "../components/drawBox";
import ShowDescriptors from "../components/showDescriptors";
import { JSON_PROFILE } from "../common/profile";

const MaxWidth = 600;
const boxColor = "#BE80B5";
const testImg = require("../img/test.jpg");

const INIT_STATE = {
  url: null,
  imageURL: null,
  fullDesc: null,
  imageURL2: null,
  fullDesc2: null,
  imageDimension: null,
  error: null,
  loading: false
};

class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INIT_STATE,
      faceMatcher: null,
      showDescriptors: false,
      WIDTH: null,
      HEIGHT: 0,
      isModelLoaded: !!isFaceDetectionModelLoaded()
    };
  }

  componentWillMount() {
    this.resetState();
    let _W = document.documentElement.clientWidth;
    if (_W > MaxWidth) _W = MaxWidth;
    this.setState({ WIDTH: _W });
    this.mounting();
  }

  mounting = async () => {
    await loadModels();
    await this.matcher();
    await this.getImageDimension(testImg);
    await this.setState({ imageURL: testImg, loading: true });
    await this.handleImageChange(testImg);
  };

  matcher = async () => {
    const faceMatcher = await createMatcher(JSON_PROFILE);
    this.setState({ faceMatcher });
  };

  handleFileChange = async event => {
    this.resetState();
    await this.setState({
      imageURL: URL.createObjectURL(event.target.files[0]),
      loading: true
    });
    // this.handleImageChange();
  };

  handleFileChange2 = async event => {
    this.resetState();
    await this.setState({
      imageURL: URL.createObjectURL(event.target.files[0]),
      loading: true
    });
    this.handleImageChange();
  };

  handleURLChange = event => {
    this.setState({ url: event.target.value });
  };

  handleButtonClick = async () => {
    this.resetState();
    let blob = await fetch(this.state.url)
      .then(r => r.blob())
      .catch(error => this.setState({ error }));
    if (!!blob && blob.type.includes("image")) {
      this.setState({
        imageURL: URL.createObjectURL(blob),
        loading: true
      });
      this.handleImageChange();
    }
  };

  handleImageChange = async () => {
    await this.getImageDimension(this.state.imageURL);
    await getFullFaceDescription(this.state.imageURL).then(fullDesc => {
      this.setState({ fullDesc, loading: false });
    });

    await this.getImageDimension(this.state.imageURL2);
    await getFullFaceDescription(this.state.imageURL2).then(fullDesc2 => {
      if(fullDesc2 === this.state.fullDesc){
        console.log("working")
      }
      this.setState({ fullDesc2, loading: false });
    });
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

  handleDescriptorsCheck = event => {
    this.setState({ showDescriptors: event.target.checked });
  };

  resetState = () => {
    this.setState({ ...INIT_STATE });
  };
  render() {
    const {
      WIDTH,
      HEIGHT,
      imageURL,
      fullDesc,
      faceMatcher,
      showDescriptors,
      isModelLoaded,
      error,
      loading
    } = this.state;

    // Display working status
    let status = <p>Status: Model Loaded = {isModelLoaded.toString()}</p>;
    if (!!error && error.toString() === "TypeError: Failed to fetch") {
      status = (
        <p style={{ color: "red" }}>Status: Error Failed to fetch Image URL</p>
      );
    } else if (loading) {
      status = <p style={{ color: "blue" }}>Status: LOADING...</p>;
    } else if (!!fullDesc && !!imageURL && !loading) {
      if (fullDesc.length < 2)
        status = <p>Status: {fullDesc.length} Face Detect</p>;
      if (fullDesc.length > 1)
        status = <p>Status: {fullDesc.length} Faces Detect</p>;
    }

    // Loading Spinner
    let spinner = (
      <div
        style={{
          margin: 0,
          color: "#BE80B5",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textShadow: "2px 2px 3px #fff"
        }}
      >
        <div className="loading" />
        <h3>Processing...</h3>
      </div>
    );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {status}
        <div
          style={{
            position: "relative",
            width: WIDTH,
            height: HEIGHT
          }}
        >
          {!!imageURL ? (
            <div
              style={{
                position: "relative"
              }}
            >
              <div style={{ position: "absolute" }}>
                <img style={{ width: WIDTH }} src={imageURL} alt="imageURL" />
              </div>
              {!!fullDesc ? (
                <DrawBox
                  fullDesc={fullDesc}
                  faceMatcher={faceMatcher}
                  imageWidth={WIDTH}
                  boxColor={boxColor}
                />
              ) : null}
            </div>
          ) : null}
          {loading ? spinner : null}
        </div>
        <div
          style={{
            width: WIDTH,
            padding: 10,
            border: "solid",
            marginTop: 10
          }}
        >
          <p>Input Image file or URL</p>
          <input
            id="myFileUpload"
            type="file"
            onChange={this.handleFileChange}
            accept=".jpg, .jpeg, .png"
          />

          <input
            id="myFileUpload2"
            type="file"
            onChange={this.handleFileChange2}
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <div className="URLInput">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Place your photo URL here (only .jpg, .jpeg, .png)"
              pattern="https://.*"
              size="30"
              onChange={this.handleURLChange}
            />
            <button onClick={this.handleButtonClick}>Upload</button>
          </div>
          <div>
            <input
              name="descriptors"
              type="checkbox"
              checked={this.state.showDescriptors}
              onChange={this.handleDescriptorsCheck}
            />
            <label>Show Descriptors</label>
          </div>
          {!!showDescriptors ? <ShowDescriptors fullDesc={fullDesc} /> : null}
        </div>
      </div>
    );
  }
}

export default withRouter(FaceRecognition);


*/
