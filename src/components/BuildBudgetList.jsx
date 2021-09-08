import React, { useState } from 'react';
import ListAllItems from '../view/ListBudgetItems';

const BuildList = (props) => 
{
    const [showItemList, isItemListVisible] = useState(false);
    const [budget, setBudget] = useState();
    return(
        <>
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
{      props.list.map( budget =>
          <tr id={budget.Key}>
          <th scope="row" >{budget.Key}</th>
         
          <td>{budget.Record.DataBase}</td>
          <td  className="text-center table-info">{budget.Record.Status}</td>
          <td>
          <button className="btn btn-sm btn-outline-warning" onClick={() => {isItemListVisible(true); setBudget(budget);}} style={{marginRight: 3}}> <i className="bi-list-task"></i></button> 
            {
              props.username === 'Construtor' ?
              budget.Record.Status === 'ABERTO' ? 
                    <>
                    <button className="btn btn-sm btn-outline-primary" style={{marginRight: 3}}> <i className="bi-bag-plus"></i></button> 
                    <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                  </> :
                     <>
                        <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-bag-plus"></i></button>
                       <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button>

                     </>
                  : props.username === 'Financeiro' ? 
                  budget.Record.Status === 'ANALISE FINANCEIRO' ?
                  (
                    <>
                    <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}}> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                </>
                  ) :
                  (
                    <>
                    <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                </>
                  )


                  : props.username === 'Fiscal' ? 
                    budget.Record.Status === 'ANALISE FISCAL' ? (
                      <>
                          <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}}> <i className="bi-clipboard-x"></i></button> 
                          <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                      </>
                    )         
                  : (
                    <>
                    <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                </>
                  )
                  : "Autentique-se primeiro"
                  
                  
            } 

          </td>
        </tr>
      )}

</tbody>
  </table>   
  {showItemList ?<ListAllItems budget={budget} /> : null}
  </>
 
    )


}


export default BuildList;