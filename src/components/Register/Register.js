import React from 'react';
import headerLogoPath from '../../images/logo.svg';
import Form from '../Form/Form';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/signin");
  }

  return (
    <div className="Register">
      <Form
        name="login"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться" 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}
        isLoading={props.isLoading}
        loadingText="Регистрация..."
      >
        <div class="Form__input-group">
          <span className="Form__field-title">Имя</span>
          <input type="text" className="Form__field" placeholder="" name="register-name" required minLength="2" maxLength="40" value={name || ''} onChange={handleChangeName} />
          <span className="Form__error-message register-name-error"></span>
        </div>

        <div class="Form__input-group">
          <span className="Form__field-title">E-mail</span>
          <input type="email" className="Form__field" placeholder="" name="register-email" required minLength="2" maxLength="40" value={email || ''} onChange={handleChangeEmail} />
          <span className="Form__error-message register-email-error"></span>
        </div>

        <div class="Form__input-group"> 
          <span className="Form__field-title">Пароль</span>
          <input type="password" className="Form__field" placeholder="" name="register-password" required minLength="2" maxLength="200" value={password || ''} onChange={handleChangePassword} />
          <span className="Form__error-message register-password-error">.</span>
        </div>
      </Form>
      <div className="Register__link">
        <p className="Register__link-hint">Уже зарегистрированы?</p>
        <Link className="Register__back-link" to="/signin">Войти</Link>
      </div>
    </div>
  );
}

export default Register;

