import React from 'react';
import { Link } from 'react-router-dom';

function SlideMenu(props) {

  return (
    <div className="SlideMenu">
        <div className="SlideMenuInner">
            <Link className="SlideMenu__link" to="/" target="_self">Главная</Link>
            <Link className="SlideMenu__link SlideMenu__link_active" to="/movies" target="_self">Фильмы</Link>
            <Link className="SlideMenu__link" to="/saved-movies" target="_self">Сохранённые фильмы</Link>
            <div className="SlideMenu__profile-group">
                <Link className="SlideMenu__profile-link" to="/profile" target="_self">Аккаунт</Link>
                <span className="SlideMenu__profile-icon" />
            </div>
            <span className="SlideMenu__close-button" />
        </div>
    </div>
  );
}

export default SlideMenu;
