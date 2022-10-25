import React from 'react';
import './App.css';
import LogoDio from './assets/logo-dio.png'
import { GrMail } from "react-icons/gr";
import {FaLock} from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='logo-dio' src={LogoDio} alt='Logo da Dio'></img>
        <div className="header-btns">
          <button className='transparent-btn'>Home</button>
          <button className='grey-btn'>Entrar</button>
          <button className='grey-btn'>Cadastrar</button>
        </div>
      </div>
      <div className='content'>
        <div className='text'>
          <h3>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
          rápido nas empresas mais desejadas.
          </h3>
        </div>
        <div className="login-box">
          <h3>Faça o seu cadastro</h3>
          <h2 className='text-regular sub-text'>Faça seu login e make the change._</h2>
          <form>
            <GrMail className='icon'/>
            <input className='input email' type='text' placeholder='E-mail'></input>
            <br></br>
            <FaLock className='icon'/>
            <input className='input password' type='password' placeholder='Password'></input>
            <br></br>
            <div className="primary-button-container">
              <button className='pink-btn' type='submit'>Entrar</button>
            </div>
          </form>
          <div className='mini-btn'>
              <button className='transparent-btn esqueci-btn'>Esqueci minha senha</button>
              <button className='transparent-btn criar-btn'>Criar conta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
