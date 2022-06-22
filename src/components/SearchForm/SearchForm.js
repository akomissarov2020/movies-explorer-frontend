import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [filterShortFilms, setFilterShortFilms] = React.useState(true);

  function onFilterShortFilmsClick(e) {
    e.preventDefault();
    setFilterShortFilms(!filterShortFilms);
  }

  return (
    <div className='SearchForm'>
      <form>
        <div className='SearchForm__field-container'>
          <input type='text' className='SearchForm__field' placeholder='Фильм' />
          <button className='SearchForm__button'>Поиск</button>
        </div>
        <FilterCheckbox
          active={filterShortFilms}
          onClick={onFilterShortFilmsClick}
        />
      </form>
    </div>
  );
}

export default SearchForm;

