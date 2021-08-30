import React from 'react';

const RegisterBudget = (props) => (
            <div>

                <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">BDI Serv</span>
  <input type="text" class="form-control" placeholder="BDI" aria-label="Username" aria-describedby="basic-addon1"/>
  <span class="input-group-text" id="basic-addon1">EBISA K</span>
  <input type="text" class="form-control" placeholder="EBISA" aria-label="Username" aria-describedby="basic-addon1"/>
  <span class="input-group-text" id="basic-addon1">Database</span>
  <input type="text" class="form-control" placeholder="Database" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    <div className="container">
        <h2>Cadastrar Item</h2>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Item</label>
    <input type="text" class="form-control" id="validationCustom01" required/>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Referência</label>
    <input type="text" class="form-control" id="validationCustom02" required/>

  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Código</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>

    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">Discriminação</label>
    <input type="text" class="form-control" id="validationCustom03" required/>

  </div>
  <div class="col-md-2">
    <label for="validationCustom04" class="form-label">Unidade Medida</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Selecione</option>
      <option>M²</option>
      <option>KM²</option>
    </select>

  </div>
  <div class="col-md-2">
    <label for="validationCustom04" class="form-label">Quantidade</label>
    <input type="number" class="form-control" id="validationCustom03" required/>

  </div>
  <div class="col-md-2">
    <label for="validationCustom05" class="form-label">Preço Unit. com BDI</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">R$</span>
      <input type="number" step="0.01" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
    </div>
  </div>
  <div class="col-md-2">
    <label for="validationCustom05" class="form-label">Valor Total com BDI</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">R$</span>
      <input type="number" step="0.01" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Adicionar Item</button>
  </div>
</form>
    
    </div>

            </div>
    );

export default RegisterBudget;