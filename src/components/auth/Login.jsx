import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    const [username, setUsername] = useState('Construtor')
    return (
<div class="container">
<div class="login-form">
<div class="main-div">
    <div class="panel">
   <h2>Login</h2>
   <p>Acesse com seu usuário e senha</p>
   </div>
    <form id="Login">
        <div class="form-group">
        <label for="username" class="text-dark">Usuário</label>
            <input name="username" class="form-control" value={username} onChange={e => setUsername(e.target.value )} id="username" placeholder="Digite seu usuário">
            </input>
        </div>
        <div class="form-group">
        <label for="username" class="text-dark">Senha</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha">
            </input>
        </div>
        <Link to={{
            pathname: "/",
            state: { username: username},
        }} >
        <button type="submit" class="btn btn-primary">Login</button>
        </Link>


    </form>
    </div>
</div></div>
    );
}

export default Login;