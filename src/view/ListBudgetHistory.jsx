import React, { useState, useEffect } from 'react';
import api from '../components/api';

function ListBudgetHistory(props) {
const [list, setList] = useState([]);

    useEffect( () => {
        api.get('/ENDPOINT/')
        .then(function (response) {
        setList(response.data)
          return response.data
        })
        .catch(function (error) {
          console.log("ERROR ->",error);
        })
       
        
      }, [])

   console.log("PROPS ListBudgetHistory.jsx: ",props);
    return (
        <table className="table">
<thead className="table-light">
    <tr>
      <th scope="col" className="text-uppercase">VAR1</th>
      <th scope="col" className="text-uppercase">VAR2</th>
      <th scope="col " className="text-center text-uppercase">VAR3</th>
      <th scope="col " className="text-center text-uppercase">VAR4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      {/* <td>{list.AtributoQualquer}</td> */}
      <td>{props.budget.Key}</td>
      <td>{props.budget.Record.Status}</td>
    </tr>
  </tbody>
</table>
    );
}

export default ListBudgetHistory;