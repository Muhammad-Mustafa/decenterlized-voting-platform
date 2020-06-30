import React, { Component, useState } from "react";
import QrReader from "react-qr-reader";
import {useHistory, withRouter, Link} from 'react-router-dom'
// import navbar from "./navbar"
 class QrcodeReader extends Component {
    componentDidMount(){
        // console.log("READER!!!!!!!" + firebase.auth().currentUser.uid)
    }
    constructor(props){
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
            path: "",
        }

        this.handleScan = this.handleScan.bind(this)
    }
    

    handleScan(data){
        this.setState({
            result: data,
        })
        if(this.state.result == "mustafaraziq30@gmail.com"){
            console.log("Hello");
        }
        else{
            alert("Invalid QrCode");
        }
    }
    handleError(err){
        console.error(err)
    }
    openImageDialog() {
        this.refs.qrReader1.openImageDialog();
    }
    
    render(){
    
        return(
            
            <div style={{
                // margin
                width: "100%",
                height: "100vh",
                padding: "0",
                marginTop: "50px",
                marginLeft: "50px",
            }}>
            <div style={{
                    marginLeft: "350px",
                    
                    margindisplay: "flex",
                flexDirection: "column",

                alignContent: "center",
                alignItems: "center",
                }}>
                <h1>Please Insert Your Qr Code</h1>
            </div>
            <div style={{
                // display: "flex",
                // flexDirection: "column",

                // // alignContent: "center",
                // // alignItems: "center",
                // width: "400px",
                // height: "400px",
            
            }}>
                <QrReader
                style={{
                    marginLeft: "400px",
                    width: "400px",
                    height: "500px",
                    margindisplay: "flex",
                flexDirection: "column",

                alignContent: "center",
                alignItems: "center",
                }}
                    ref="qrReader1"
                    delay={this.state.delay}
                    // previewStyle={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode={true}
                />
                <input
                style={{
                    marginLeft: "400px",
                    width: "200px",
                }}
                type="button" value="Insert the  QR Code" onClick={this.openImageDialog.bind(this)} />
                <Link to="/BlockchainList" ><input
                 style={{
                    // marginLeft: "400px",
                    width: "200px",
                }}
                 type="button" value="Submit the QR Code"/></Link>
                {/* <p>the result is  {this.state.result}</p> */}
            </div>
            </div>
        )
    }
}

export default QrcodeReader;