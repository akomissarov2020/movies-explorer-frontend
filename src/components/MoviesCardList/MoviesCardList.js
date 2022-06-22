import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import filmImage from '../../images/pic__COLOR_pic.png';

function MoviesCardList(props) {
  return (
    <ul className="MoviesCardList">
      <li><MoviesCard 
        image={filmImage}
        title="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
        saved={false}
        deletable={props.isSavedMovies}
      /></li>
      <li><MoviesCard 
        image={filmImage}
        title="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
        saved={true}
        deletable={props.isSavedMovies}
      /></li>
      <li><MoviesCard 
        image={filmImage}
        title="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
        saved={false}
        deletable={props.isSavedMovies}
      /></li>
      <li><MoviesCard 
        image={filmImage}
        title="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
        saved={false}
        deletable={props.isSavedMovies}
      /></li>
      <li><MoviesCard 
        image={filmImage}
        title="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
        saved={false}
        deletable={props.isSavedMovies}
      /></li>
    </ul>
  );
}

export default MoviesCardList;

