import React, {  useState } from 'react';




const RegisterBudget = (props) => {
  const [item , setItem] = useState('');
  const [ref , setRef] = useState('');
  const [cod , setCod] = useState('');
  const [disc , setDisc] = useState('');
  const [uM , setUM] = useState(null);
  const [qtd , setQTD] = useState(0);
  const [valorUnit , setValorUnit] = useState(0);
  const [valorTotal , setValorTotal] = useState(0);
  
            return(

            <div>

              
    <div className="container">
        <h2>Cadastrar Item</h2>
    <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label  className="form-label">Item</label>
    <input type="text" className="form-control" onChange={e=> setItem(e.target.value)} value={item} required/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Referência</label>
    <input type="text" className="form-control" onChange={e=> setRef(e.target.value)} value={ref} required/>

  </div>
  <div className="col-md-4">
    <label  className="form-label">Código</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" onChange={e=> setCod(e.target.value)} value={cod}   aria-describedby="inputGroupPrepend" required/>

    </div>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Discriminação</label>
    <input type="text" className="form-control" onChange={e=> setDisc(e.target.value)} value={disc}   required/>

  </div>
  <div className="col-md-2">
    <label  className="form-label">Unidade Medida</label>
    <select className="form-select"  onChange={e=> setUM(e.target.value)} value={uM}  required>
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
    <input type="number" className="form-control"  onChange={e=> setQTD(e.target.value)} value={qtd}   required/>

  </div>
  <div className="col-md-2">
    <label  className="form-label">Preço Unit. com BDI</label>
    <div className="input-group has-validation">
      <span className="input-group-text">R$</span>
      <input type="number" step="0.01" className="form-control" id="validationCustomUsername" onChange={e => setValorUnit(e.target.value)} value={valorUnit}  aria-describedby="inputGroupPrepend"  required/>
    </div>
  </div>
  <div className="col-md-2">
    <label  className="form-label">Valor Total com BDI</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">R$</span>
      <input step="0.01" className="form-control" id="validationCustomUsername"  aria-describedby="inputGroupPrepend" value={valorTotal} disabled/>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Adicionar Item</button>
  </div>
</form>
    
    </div>

            </div>
            )
            };

export default RegisterBudget;