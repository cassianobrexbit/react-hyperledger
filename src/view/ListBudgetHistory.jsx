import React, { useState, useEffect } from 'react';
import api from '../components/api';

function ListBudgetHistory(props) {
const [list, setList] = useState([]);

    useEffect( () => {
        api.get(`/getassettxs/${props.budget.Key}`)
        .then(function (response) {
        setList(response.data)
          console.log(response.data)
          return response.data.items
        })
        .catch(function (error) {
          console.log("ERROR ->",error);
        })
       
        
      }, [props])

   console.log("PROPS ListBudgetHistory.jsx: ",list);
    return (
        <table className="table">
<thead className="table-light">
    <tr>
      <th scope="col" className="text-uppercase">ID</th>
      <th scope="col" className="text-uppercase">Tipo</th>
      <th scope="col " className="text-center text-uppercase">BDI</th>
      <th scope="col " className="text-center text-uppercase">Empresa</th>
      <th scope="col" className="text-uppercase">Data Base</th>
      <th scope="col" className="text-uppercase">Total Geral</th>
      <th scope="col" className="text-uppercase">Status</th>
      <th scope="col" className="text-uppercase">Usuário</th>
      <th scope="col" className="text-uppercase">Tx Data</th>
    
    
    </tr>
  </thead>
  <tbody>
  {list.map( history =>
      {

           return(
        <>
           <tr>
             
             <td>{history.ID}</td>
             <td>{history.TipoServ}</td>
             <td>{history.BDIServ}</td>
             <td>{history.EbisaK}</td>
             <td>{history.DataBase}</td>
             <td><b>{history.TotalGeral}</b></td>
             <td><b>{history.Status}</b></td>
             <td>{history.Owner}</td>
             <td>{history.TxDate}</td>
           </tr>    
        </>
           )
        //}
         }

      )}
    
  </tbody>
</table>
    );
}

export default ListBudgetHistory;