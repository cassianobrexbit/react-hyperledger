import React from 'react';

function TableList(props) {
    return (
<table class="table table-hover">
<thead className="table-light">
    <tr>
      <th scope="col" className="text-uppercase">COD</th>
      <th scope="col" className="text-uppercase">Data</th>
      <th scope="col " className="text-center text-uppercase">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{new Date().toLocaleDateString()}</td>
      <td  className="text-center table-info">Aberta</td>
      
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