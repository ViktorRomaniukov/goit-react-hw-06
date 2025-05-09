import React from 'react';
import css from '../ContactForm/ContactForm.module.css';
import {changeFilter} from '../../redux/filtersSlice';

const SearchBox = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(changeFilter(value.target.value));
  }

  return (
    <label htmlFor="searchInput" className={css.label}>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        id="searchInput"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
