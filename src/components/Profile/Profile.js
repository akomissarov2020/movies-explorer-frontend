import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <div className="Profile">
      <p className="Profile__greeting">Привет, Виталий!</p>
      <div className="Profile__values">
        <p className="Profile__label">Имя</p>
        <p className="Profile__value">Виталий</p>
        <div className="Profile__border" />
        <p className="Profile__label">E-mail</p>
        <p className="Profile__value">pochta@yandex.ru</p>
      </div>

      <Link className="Profile__edit-button" to="/edit">Редактировать</Link>
      <Link className="Profile__logout-button" to="/signout">Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;

