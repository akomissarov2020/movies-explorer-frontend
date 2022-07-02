import React from 'react';

function MoviesCard(props) {

  const [active, setActive] = React.useState(false);

  return (
    <div className="MoviesCard"
        onMouseEnter={(e) => {setActive(true)}} 
        onMouseLeave={(e) => {setActive(false)}}
        >
      <img className="MoviesCard__image" 
        src={props.image} 
        alt={props.title} 
        />
      <div className="MoviesCard__description">
        <p className="MoviesCard__title ">{props.title}</p>
        <p className="MoviesCard__duration">{props.duration}</p>
      </div>
      {props.deletable && active && (<button className="MoviesCard__delete-button" />)}
      {!props.deletable && props.saved && (<div className="MoviesCard__saved-icon" />)}
      {!props.deletable && active && !props.saved && (<button className="MoviesCard__save-button">Сохранить</button>)}
    </div>
  );
}

export default MoviesCard;

