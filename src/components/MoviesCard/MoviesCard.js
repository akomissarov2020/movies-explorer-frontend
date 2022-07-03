import React from 'react';

function MoviesCard(props) {

  const [active, setActive] = React.useState(false);
  const [saved, setSaved] = React.useState(props.saved);

  function onClick() {
    window.open(props.trailerLink, '_blank');
  }

  function handleMovieSave() {
    props.handleMovieSave(props.movie);
    setSaved(true);
  }

  function handleMovieRemove() {
    props.handleMovieRemove(props.id);
    setSaved(false);
  }

  return (
    <div className="MoviesCard"
        onMouseEnter={(e) => {setActive(true)}} 
        onMouseLeave={(e) => {setActive(false)}}
        >
      <img className="MoviesCard__image" onClick={onClick} 
        src={props.image} 
        alt={props.alt} 
        />
      <div className="MoviesCard__description">
        <p className="MoviesCard__title ">{props.title}</p>
        <p className="MoviesCard__duration">{props.duration}</p>
      </div>
      {props.deletable && active && (<button className="MoviesCard__delete-button" onClick={handleMovieRemove} />)}
      {!props.deletable && saved && (<div className="MoviesCard__saved-icon" onClick={handleMovieRemove} />)}
      {!props.deletable && active && !saved && (<button className="MoviesCard__save-button" onClick={handleMovieSave}>Сохранить</button>)}
    </div>
  );
}

export default MoviesCard;

