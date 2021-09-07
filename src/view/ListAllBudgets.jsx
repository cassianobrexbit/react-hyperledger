import React, { useEffect, useState } from 'react';
import api from "../components/api"


function BuildList(props){
  // console.log(props.username)
  return(
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
            <tr>
            <th scope="row">{budget.Key}</th>
           
            <td>{budget.Record.DataBase}</td>
            <td  className="text-center table-info">{budget.Record.Status}</td>
            <td>
              {
                props.username.username === 'Construtor' ?
                budget.Record.Status === 'ABERTO' ? 
                      <div>
                      <button className="btn btn-sm btn-outline-primary" style={{marginRight: 3}}> <i className="bi-bag-plus"></i></button> 
                      <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                    </div> :
                       <div>
                          <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-bag-plus"></i></button>
                         <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button>

                       </div>
                    : props.username.username === 'Financeiro' ? 
                    budget.Record.Status === 'ANALISE FINANCEIRO' ?
                    (
                      <div>
                      <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}}> <i className="bi-clipboard-x"></i></button> 
                      <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                  </div>
                    ) :
                    (
                      <div>
                      <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                      <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                  </div>
                    )


                    : props.username.username === 'Fiscal' ? 
                      budget.Record.Status === 'ANALISE FISCAL' ? (
                        <div>
                            <button className="btn btn-sm btn-outline-danger" style={{marginRight: 3}}> <i className="bi-clipboard-x"></i></button> 
                            <button className="btn btn-sm btn-outline-success"> <i className="bi-clipboard-check"></i></button> 
                        </div>
                      )         
                    : (
                      <div>
                      <button className="btn btn-sm " style={{marginRight: 3}} disabled> <i className="bi-clipboard-x"></i></button> 
                      <button className="btn btn-sm" disabled> <i className="bi-clipboard-check"></i></button> 
                  </div>
                    )
                    : "Autentique-se primeiro"
                    
                    
              }

            </td>
          </tr>
        )}

  </tbody>
    </table>
  )
}

function TableList(props) {
const [list, setList] = useState([]);

    
    useEffect( () => {
      api.get('/assets')
      .then(function (response) {
      
        return response.data
      })
      .catch(function (error) {
        console.log("ERROR->",error);
      }).then(value => setList(value))
      
    }, [])
    
    if(list.length > 0) 
    return (
      <BuildList username={props} list={list}/>

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