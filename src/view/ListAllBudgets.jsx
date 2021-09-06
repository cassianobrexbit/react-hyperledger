import React from 'react';

function TableList(props) {
    let btn= "OI"
    if (props.username === "Construtor"){
      btn = <button className="btn btn-sm btn-outline-success"> <i class="bi-clipboard-check"></i></button> 
       
    }
    return (
<table class="table table-hover">
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
      <th scope="row">1</th>
      <td>{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-info">Aberta</td>
      <td>{btn}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-warning">Analise Fiscal</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-warning">Analise Financeiro</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-success">Paga</td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-warning">Aguardando correções</td>
      
    </tr>
  </tbody>
</table>
    );
}

export default TableList;