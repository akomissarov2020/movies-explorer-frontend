import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div className="Error404">
      <p className="Error404__text">404</p>
      <p className="Error404__message">Страница не найдена</p>
      <Link className="Error404__back-button" to="/">Назад</Link>
    </div>
  );
}

export default Error404;

