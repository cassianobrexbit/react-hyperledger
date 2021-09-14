import React, { useState, useEffect , useRef } from 'react';
import Content from './Content';
import { Modal } from 'bootstrap';
import { useLocation } from 'react-router-dom';
import api from './api';


async function createBudget(bdi, ebisa , data){
  if(bdi && ebisa && data){

    api.post(`assets/`, {
      Record:{
        TipoServ: "Varricao",
        BDIServ: bdi,
        EbisaK: ebisa,
        DataBase: data,
        Status: 'ABERTO'
      }
    })
    .then( console.log("Posted."))
    .catch(err => console.log(err))
  }
  }
function Main(props) {
  const location = useLocation();
  // console.log(location);
  let username = "Anônimo"
  const [modal, setModal] = useState(null);
  const [ebisak , setEbisak] = useState();
  const [date , setDate] = useState();
  const [BDI , setBDI] = useState();
  const newAssetModal = useRef();
  useEffect(() => {
    setModal(
      new Modal(newAssetModal.current)
      )
    }, [])

          location.state ? username = location?.state.username : username = "Anônimo"
            
            
        let btnNewAsset;
        username === 'Construtor' ? 
        btnNewAsset =<button className="btn btn-primary btn-block" onClick={() => modal.show()} >Novo Orçamento</button>
        :
        btnNewAsset =<button className="btn btn-secondary btn-block" disabled >Novo Orçamento</button>


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 " style={{paddingTop: 10}}>
                 Bem-vindo {username}
                    <div className="content" style={{paddingTop: 25}}>

                {btnNewAsset}
                <div className="modal fade" ref={newAssetModal} tabIndex="-1" aria-labelledby="newAssetModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newAssetModalLabel">Novo Orçamento</h5>
              
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">BDI Serv</span>
  <input type="text" className="form-control" placeholder="BDI" aria-label="BDI" value={BDI} onChange={e => setBDI(e.target.value)}/>
</div>
 <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">EBISA K</span>
  <input type="text" className="form-control" placeholder="EBISA" aria-label="EBISA" value={ebisak} onChange={e => setEbisak(e.target.value)}/>
 </div>
 <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Data Base</span>
  <input type="date" className="form-control" placeholder="" aria-label="DATA" min={new Date()}  onChange={e => setDate(e.target.valueAsDate)}/>

</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Fechar</button>
              <button type="button" className="btn btn-primary" onClick={() => {
              let database = date?.toLocaleString('pt-BR', {month: 'short', year: 'numeric'});   
              createBudget(BDI,ebisak,database)
              .then(modal.hide())
              .catch(err=> console.log(err));} }>Salvar</button>
            </div>
          </div>
        </div>
      </div>
                    </div>
                    
                </div>
                <div className="col-8 card">
            <Content {...props} username={username} />

                </div>
                <div className="col-2">
                </div>
                <div className="w-100"></div>
            </div>

        </div>
    );
}

export default Main;