import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <div className="Movies">
      <SearchForm />
      <MoviesCardList 
        saved={false}
      />
      <button className="Movies__more-button">Ещё</button>
      <Preloader />
    </div>
  );
}

export default Movies;

