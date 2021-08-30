import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
<div class="container">
<div class="login-form">
<div class="main-div">
    <div class="panel">
   <h2>Admin Login</h2>
   <p>Acesse com seu usuário e senha</p>
   </div>
    <form id="Login">

        <div class="form-group">

        <label for="username" class="text-dark">Usuário</label>
            <input type="text" name="username" class="form-control" id="username" placeholder="Digite seu usuário">
            </input>
        </div>

        <div class="form-group">
        <label for="username" class="text-dark">Senha</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha">
            </input>
        </div>
        <div class="forgot">
        <a href="reset.html">Perdeu a senha?</a>
</div>
        <Link to="/main"></Link>
        <button type="submit" class="btn btn-primary">Login</button>

    </form>
    </div>
</div></div>
    );
}

export default Login;