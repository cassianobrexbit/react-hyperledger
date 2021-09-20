import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    const [username, setUsername] = useState('Construtor')
    return (
<div className="container">
<div className="login-form">
<div className="main-div">
    <div className="panel">
   <h2>Login</h2>
   <p>Acesse com seu usuário e senha</p>
   </div>
    <form id="Login">
        <div className="form-group">
        <label htmlFor="username" className="text-dark">Usuário</label>
            <input name="username" className="form-control" value={username} onChange={e => setUsername(e.target.value )} id="username" placeholder="Digite seu usuário">
            </input>
        </div>
        <div className="form-group">
        <label htmlFor="username" className="text-dark">Senha</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Digite sua senha">
            </input>
        </div>
        <Link to={{
            pathname: "/",
            state: { username: username},
        }} >
        <button type="submit" className="btn btn-primary">Login</button>
        </Link>


    </form>
    </div>
</div></div>
    );
}

export default Login;