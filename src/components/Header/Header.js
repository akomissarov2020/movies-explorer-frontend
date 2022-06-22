import React from 'react';
import { Link } from 'react-router-dom';
import headerLogoPath from '../../images/logo.svg';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import SlideMenu from '../SlideMenu/SlideMenu';

function Header(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function showSlideMenu(e) {

  }

  return (
    <header className={props.dark ? `Header` : `Header Header_logined` }>
      <Link to="/" className={props.dark ? `Header__logo` : `Header__logo Header__logo_logined` } target="_self">
        <img src={headerLogoPath} alt="Логотип проекта" />
      </Link>
      {props.dark ? (<>  
        <Link className="Header__reglink" to="/signup" target="_self">Регистрация</Link>
        <Link className="Header__inlink" to="/signin" target="_self">Войти</Link>
        </>) : (<>
          <Link className="Header__link" to="/movies" target="_self">Фильмы</Link>
          <Link className="Header__link Header__link_light" to="/saved-movies" target="_self">Сохранённые фильмы</Link>
          <Link className="Header__profile-link" to="/profile" target="_self">Аккаунт</Link>
          <span className="Header__profile-icon" />
          <span className=".Header__more-button" onClick={showSlideMenu} />
        </>)}
        <SlideMenu />
    </header>
  );
}

export default Header;
