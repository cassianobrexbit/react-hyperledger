import React from 'react';
import Content from './Content';

function Main(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    1-3
                {/* TALVEZ UM MENU AQUI */}
                </div>
                <div className="col-10">
            <Content></Content>

                </div>
                <div className="col">
                    3-3
                </div>
            </div>

        </div>
    );
}

export default Main;