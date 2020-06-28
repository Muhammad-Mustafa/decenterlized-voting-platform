import React, { useState, useEffect } from "react";
// import {getDailyData} from './../../api';
import { Line, Bar } from 'react-chartjs-2';
import * as firebase from "firebase"

export default function  Result(){
return(
    <div>
        <div>
            <h1>Result of your Constituency !</h1>
        </div>
    <div>
    <Bar
    data={{
      labels: ['PTI', 'PMLN', 'PPP', 'Independent'],
      datasets:[{
        label:'Votes',
        backgroundColor:[
          'rgba(0,0,255,0.5)',
          'rgba(0,255,0,0.5)',
          'rgba(255,0,0,0.5)',
          'rgba(255,0,0,0.8)',
        ],
        data:["5698", "4625", "3468", "2795"],
      }]
    }}
    options={{
      legend: {display: false},
      title: {display: true, title: "Result"},
    }}  
    />
</div>
    </div>
)
}


const [election, setElection] = useState("deployed")
let r = null;

useEffect(() => {
  console.log("Current User Id" + firebase.auth().currentUser.uid);
  firebase
    .database()
    .ref("/election/")
    .on("value",(snapshot) => {
      console.log(snapshot.val().status);
      setElection(snapshot.val().status);
  });
},[])

const noResult  = (
  <h1>No Results to show</h1>
)
const chart = (<div>
  <div>
      <h1>Result of your Constituency !</h1>
  </div>
<div>
<Bar
data={{
labels: ['PTI', 'PMLN', 'PPP', 'Independent'],
datasets:[{
  label:'Votes',
  backgroundColor:[
    'rgba(0,0,255,0.5)',
    'rgba(0,255,0,0.5)',
    'rgba(255,0,0,0.5)',
    'rgba(255,0,0,0.8)',
  ],
  data:["5698", "4625", "3468", "2795"],
}]
}}
options={{
legend: {display: false},
title: {display: true, title: "Result"},
}}  
/>
</div>
</div>)
if(election == "deployed"){
  r= noResult;

}else if(election == "finished"){
  r=chart;
}

return(
  <div>
    {r}

  </div>
)
}




