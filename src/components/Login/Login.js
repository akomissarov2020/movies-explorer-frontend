import React from 'react';
import headerLogoPath from '../../images/logo.svg';
import Form from '../Form/Form';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    e.target.focus();
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    e.target.focus();
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/profile");
  }

  function onInvalid(e) {
    
    if (e.target.valid) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Что-то пошло не так...");
    }
    
  }

  return (
    <div className="Login">
      <Link to="/" className="Login__logo" target="_self">
        <img src={headerLogoPath} alt="Логотип проекта" />
      </Link>
      <Form
        name="login"
        title="Рады видеть!"
        buttonText="Войти" 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}
        isLoading={props.isLoading}
        loadingText="Сохраняется..."
      >
        <div class="Form__input-group">
          <span className="Form__field-title">E-mail</span>
          <input type="email" 
                 className="Form__field" 
                 placeholder="" 
                 name="login-email" 
                 required minLength="2" 
                 maxLength="40" 
                 value={email || ''} 
                 onChange={handleChangeEmail}
               
                  />
          <span className="Form__error-message login-email-error"></span>
        </div>

        <div class="Form__input-group">
          <span className="Form__field-title">Пароль</span>
          <input type="password" 
                 className="Form__field" 
                 placeholder="" 
                 name="login-password" 
                 required minLength="2" 
                 maxLength="200" 
                 value={password || ''} 
                 onChange={handleChangePassword} 

                 />
          <span className="Form__error-message login-password-error"></span>
        </div>
        
      </Form>
      <div className="Login__link">
        <p className="Login__link-hint">Ещё не зарегистрированы?</p>
        <Link className="Login__back-link" to="/signup">Регистрация</Link>
      </div>
    </div>
  );
}

export default Login;

