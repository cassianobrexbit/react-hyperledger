import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListAllItems from '../view/ListBudgetItems';
import RegisterItem from '../view/RegisterItem'
import api from '../components/api';
import ListBudgetHistory from '../view/ListBudgetHistory';


function updateStatus(budgetID,status){
  api.put(`updateasset/${budgetID}`, { Status: `${status}` })
  .then(() => console.log("updated"))
  .catch(err => console.log("erro ao atualizar: ",err));
}

function transferOwner(budgetID, owner){
  console.log("OWNER->",owner)
  api.put(`transferasset/${budgetID}`, { newOwner: `${owner}` })
  .then(() => console.log("Transfer ok"))
  .catch(err => console.log("erro ao atualizar: ",err));
}

function updateTotalGeral(budgetID,totalGeral){
  api.put(`updateassettotal/${budgetID}`, { TotalGeral: `${totalGeral}` })
  .then(() => console.log("UPDATED TOTAL"))
  .catch(err => console.log("erro ao atualizar: ",err));
 }

function getTotalGeral(budgetID){
  api.get(`getitems/${budgetID}`)
  //.then((res) => console.log("GETASSETTOTAL: ",res.data.sumVlrTotalBDI))
  .then((res) => {console.log("GETASSETTOTAL: ",res.data.sumVlrTotalBDI);
                  updateTotalGeral(budgetID, res.data.sumVlrTotalBDI)})
  .catch(err => console.log("erro ao atualizar: ",err));
}


const BuildList = (props) => 
{
    const [showItemList, isItemListVisible] = useState(false);
    const [showNewItem, isNewItemVisible] = useState(false);
    const [budget, setBudget] = useState();
    const [itemID, setItemID] = useState(null);
    return(
        <>
    <table className="table table-hover">
    <thead className="table-light">
  <tr>
    <th scope="col" className="text-uppercase">COD</th>
    <th scope="col" className="text-uppercase">Data</th>
    <th scope="col " className="text-center text-uppercase">Tipo Serviço</th>
    <th scope="col " className="text-center text-uppercase">Status</th>
    <th scope="col " className="text-center text-uppercase">Ações</th>
  </tr>
</thead>
<tbody>
{      props.list.map( budget =>
          <tr id={budget.Key}>
          <th scope="row" >{budget.Key}</th>
         
          <td>{budget.Record?.DataBase}</td>
          <td className="text-center ">{budget.Record?.TipoServ}</td>
          <td  className="text-center table-info">{budget.Record?.Status}</td>
          <td className="text-center">
          {props.username === 'Anônimo' ? 
          <>
          <Link to='/login'>
            <button className="btn btn-sm btn-success" href="/login"> <i className="bi-list-task">LOGIN</i></button> 
          </Link>
          </>
          :
          <button className="btn btn-sm btn-outline-warning" onClick={() => {isNewItemVisible(false); isItemListVisible(true); setBudget(budget)}} style={{marginRight: 3}}> <i className="bi-list-task"></i></button> 

        }
            {
              props.username === 'Construtor' ?
              budget.Record?.Status === 'ABERTO' ? 
                    <>
                    <button className="btn btn-sm btn-outline-primary" style={{marginRight: 3}} onClick={() => {isItemListVisible(false); isNewItemVisible(true); setItemID(budget.Key)}}> <i className="bi-bag-plus"></i></button> 
                    <button className="btn btn-sm btn-outline-success" onClick={() => {updateStatus(budget.Key,"ANALISE FISCAL");getTotalGeral(budget.Key);transferOwner(budget.Key,"Fiscal")}}> <i className="bi-clipboard-check"></i></button> 
                  </> :
                     <>
                        <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-bag-plus"></i></button>
                       <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button>

                     </>
                  : props.username === 'Financeiro' ? 
                  budget.Record?.Status === 'ANALISE FINANCEIRO' ?
                  (
                    <>
                    <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}} onClick={() => {updateStatus(budget.Key,"REPROVADO"); transferOwner(budget.Key,"Construtor")}}> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm btn-outline-success" onClick={() => updateStatus(budget.Key,"APROVADO")}> <i className="bi-clipboard-check"></i></button> 
                </>
                  ) :
                  (
                    <>
                    <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                </>
                  )


                  : props.username === 'Fiscal' ? 
                    budget.Record?.Status === 'ANALISE FISCAL' ? (
                      <>
                          <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}} onClick={() => {updateStatus(budget.Key,"REPROVADO"); transferOwner(budget.Key,"Construtor")}}> <i className="bi-clipboard-x"></i></button> 
                          <button className="btn btn-sm btn-outline-success" onClick={() => {updateStatus(budget.Key,"ANALISE FINANCEIRO"); transferOwner(budget.Key,"Financeiro")}}> <i className="bi-clipboard-check"></i></button> 
                      </>
                    )         
                  : (
                    <>
                    <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                    <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                </>
                  )
                  : ""
                  
                  
            } 

          </td>
        </tr>
      )}

</tbody>
  </table>   
  {showItemList ? <><ListAllItems budget={budget}/> <div className="container" style ={{paddingTop: 50}}><ListBudgetHistory budget={budget}/></div></> : null}
  {showNewItem ? <RegisterItem id={itemID}/> : null}
  </>
 
    )


}


export default BuildList;