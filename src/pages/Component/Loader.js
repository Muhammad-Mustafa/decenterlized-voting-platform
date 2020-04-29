import React from "react";

const SpinnerPage = () => {
  return (
    <>
      <div style={{position:'absolute',top:'50%',left:'50%'}} className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default SpinnerPage;