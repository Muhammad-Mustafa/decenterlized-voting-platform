import React, { Component, useState } from "react";
import QrReader from "react-qr-reader";
import {useHistory, withRouter, Link} from 'react-router-dom'

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
                display: "flex",
                flexDirection: "column",
                // alignContent: "center",
                // alignItems: "center",
                width: "200px",
                height: "200px",
            }}>
                <QrReader
                    ref="qrReader1"
                    delay={this.state.delay}
                    // previewStyle={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode={true}
                />
                <input type="button" value="Insert the  QR Code" onClick={this.openImageDialog.bind(this)} />
                <Link to="/BlockchainList" ><input type="button" value="Submit the QR Code"/></Link>
                {/* <p>the result is  {this.state.result}</p> */}
            </div>
        )
    }
}

export default QrcodeReader;