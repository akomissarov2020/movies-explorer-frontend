import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="SavedMovies">
      <SearchForm />
      <MoviesCardList 
        isSavedMovies={true}
      />
    </div>
  );
}

export default SavedMovies;
