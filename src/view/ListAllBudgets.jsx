import React, { useEffect, useState } from 'react';
import api from "../components/api"
import BuildList from '../components/BuildBudgetList';

function TableList(props) {
const [list, setList] = useState([]);

    
    useEffect( () => {
      api.get('/assets')
      .then(function (response) {
      setList(response.data)
        return response.data
      })
      .catch(function (error) {
        console.log("ERROR->",error);
      })
     
      
    }, [])
    
    if(list.length > 0) 
    return (
      <BuildList {...props} list={list}/>

    )

    // console.log("EFFECT LIST->",list);
   
    return (
      // <BuildList/>,
 <table className="table table-hover">
<thead className="table-light">
    <tr>
      <th scope="col" className="text-uppercase">COD</th>
      <th scope="col" className="text-uppercase">Data</th>
      <th scope="col " className="text-center text-uppercase">Status</th>
      <th scope="col " className="text-center text-uppercase">Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     Nada pra ver aqui.
    </tr>
  </tbody>
</table> 
    );
}

export default TableList;