import React from 'react';
import TableList from '../view/ListAllBudgets';
import RegisterItem from '../view/RegisterItem';

function content(props) {
    // console.log("CONTENT PROPS->",props)  
  return (
        <div className="content-box">
          
          <TableList {...props}/>
          {/* <RegisterItem></RegisterItem> */}
        </div>
    );
}

export default content;