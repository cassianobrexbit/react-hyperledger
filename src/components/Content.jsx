import React from 'react';
import TableList from '../view/ListAllBudgets';
import RegisterBudget from '../view/RegisterBudget';
import axios from 'axios';


// axios.get('https://ec2-18-230-17-198.sa-east-1.compute.amazonaws.com:8000/getassets')
//   .then((response) => {
//     console.log(response);
//   });

function content(props) {
    console.log("CONTENT PROPS->",props)  
  return (
        <div className="content-box">
          
          <TableList></TableList>
          <RegisterBudget></RegisterBudget>
        </div>
    );
}

export default content;