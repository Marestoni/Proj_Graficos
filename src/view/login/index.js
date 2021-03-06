import React from 'react';
import './login.css';
import cashIcon from '../../assets/icon/receive-cash--v1.png'
function login(){
    return(
    <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
        <div className="text-center mb-4">
            <img className="mb-4" src={cashIcon} alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
        </div>

        
            <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />

            <input type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />
      

        <button className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>

        <div className="msg-login text-white text-center my-5">
                <span><strong>Você Está conectado</strong></span>
                <br></br>
                <span><strong>Senha ou email incorretos</strong></span>
        </div>

            <div className="opcoes-login mt-5 text-center">
                <a href="#" className="mx-2">Recuperar Senha</a>
                <a href="#" className="mx-2">Quero Cadastrar</a>
            </div>
        </form>
    </div>
    )
}

export default login;