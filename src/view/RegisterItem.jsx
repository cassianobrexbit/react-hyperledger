import React, {  useEffect, useState } from 'react';
import api from '../components/api';

function createNewItem(itemBudget, budgetID) {
  // console.log("updated.",itemBudget,budgetID);
  api.post(`insertitem/`, {
    //Key: 10,
    assetId: budgetID,
    itemRef: itemBudget.ref,
    itemCod: itemBudget.cod,
    itemDesc: itemBudget.disc,
    itemUnid: itemBudget.uM,
    itemQuant: itemBudget.qtd,
    itemPrecUnit: itemBudget.valorUnit
    //itemVlrTotalBDI: itemBudget.valorTotal
  })
  .then(() => console.log("updated."))
  .catch(err => console.log("erro na request: ",err));
}

const RegisterBudget = (props) => {
  const [itemBudget , setItemBudget] = useState({
    item: '',
    ref: '',
    cod: '',
    disc: '',
    uM: '',
    qtd: 0,
    valorUnit: 0,
    valorTotal: 0
  });

  
useEffect( () => {
  setItemBudget({
    ...itemBudget,
    valorTotal: itemBudget.qtd*itemBudget.valorUnit
  })
},[itemBudget.valorUnit, itemBudget.qtd]);

            return(

            <div>

              
    <div className="container">
        <h2>Cadastrar Item</h2>
    <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label  className="form-label">Item</label>
    <input type="text" className="form-control" onChange={e=> setItemBudget({...itemBudget, item: e.target.value})} value={itemBudget?.item} required/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Referência</label>
    <input type="text" className="form-control" onChange={e=> setItemBudget({...itemBudget, ref: e.target.value})} value={itemBudget?.ref} required/>

  </div>
  <div className="col-md-4">
    <label  className="form-label">Código</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" onChange={e=> setItemBudget({...itemBudget, cod: e.target.value})} value={itemBudget?.cod}   aria-describedby="inputGroupPrepend" required/>

    </div>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Discriminação</label>
    <input type="text" className="form-control" onChange={e=> setItemBudget({...itemBudget, disc: e.target.value})} value={itemBudget?.disc}   required/>

  </div>
  <div className="col-md-2">
    <label  className="form-label">Unidade Medida</label>
    <select className="form-select"  onChange={e=> setItemBudget({...itemBudget, uM: e.target.value})} value={itemBudget?.uM}  required>
      <option selected disabled value="">Selecione</option>
      <option>M²</option>
      <option>M³</option>
      <option>TON</option>
      <option>UND</option>
      <option>Hora</option>
      <option>M³/KM</option>
    </select>

  </div>
  <div className="col-md-2">
    <label  className="form-label">Quantidade</label>
    <input type="number" className="form-control"  onChange={e=> setItemBudget({...itemBudget, qtd: e.target.value})} value={itemBudget?.qtd}   required/>

  </div>
  <div className="col-md-2">
    <label  className="form-label">Preço Unit. com BDI</label>
    <div className="input-group has-validation">
      <span className="input-group-text">R$</span>
      <input type="number" step="0.1" className="form-control" id="validationCustomUsername" onChange={e=> setItemBudget({...itemBudget, valorUnit: e.target.value})} value={itemBudget?.valorUnit}  aria-describedby="inputGroupPrepend"  required/>
    </div>
  </div>
  <div className="col-md-2">
    <label  className="form-label">Valor Total com BDI</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">R$</span>
      <input step="0.1" className="form-control" id="validationCustomUsername"  aria-describedby="inputGroupPrepend" value={itemBudget?.valorTotal} disabled/>
    </div>
  </div>
  <div className="col-12">
  </div>
</form>
    <button className="btn btn-primary" onClick={() => createNewItem(itemBudget,props.id)}>Adicionar Item</button>
    
    </div>

            </div>
            )
            };

export default RegisterBudget;