import React from 'react';
import TableList from '../view/ListAllBudgets';
import RegisterBudget from '../view/RegisterBudget';

function content(props) {
    return (
        <div className="content-box">
          
          {/* <TableList></TableList> */}
          <RegisterBudget></RegisterBudget>
        </div>
    );
}

export default content;