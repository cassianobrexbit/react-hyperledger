import React, { useState, useEffect , useRef } from 'react';
import Content from './Content';
import Login from './auth/Login';
import { Modal } from 'bootstrap';



function Main(props) {

    const [modal, setModal] = useState(null);
    const newAssetModal = useRef();
    useEffect(() => {
        setModal(
            new Modal(newAssetModal.current)
            )
        }, [])
        
        if(!props.username) {
            return <Login/>
        }
        // console.log("PROPS-> ",props);
        
        // if(props.username === 'Construtor'){
            // btnNewAsset =<button className="btn btn-primary btn-block" onClick={() => modal.show()} >Novo Orçamento</button>
            // } 
            
        let btnNewAsset;
        props.username === 'Construtor' ? 
        btnNewAsset =<button className="btn btn-primary btn-block" onClick={() => modal.show()} >Novo Orçamento</button>
        :
        btnNewAsset =<button className="btn btn-secondary btn-block" disabled >Novo Orçamento</button>


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 " style={{paddingTop: 10}}>
                 Bem-vindo {props.username}
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
  <input type="text" className="form-control" placeholder="BDI" aria-label="BDI" aria-describedby="basic-addon1"/>
</div>
 <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">EBISA K</span>
  <input type="text" className="form-control" placeholder="EBISA" aria-label="EBISA" aria-describedby="basic-addon1"/>
 </div>
 <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Data Base</span>
  <input type="date" className="form-control" placeholder="" aria-label="DATA" aria-describedby="basic-addon1"/>

</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Fechar</button>
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
                    </div>
                    
                </div>
                <div className="col-8 card">
            <Content {...props} />

                </div>
                <div className="col-2">
                </div>
                <div className="w-100"></div>
            </div>

        </div>
    );
}

export default Main;