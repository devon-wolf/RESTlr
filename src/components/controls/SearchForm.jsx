import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.css';

const SearchForm = () => (
	<form className={style.searchForm}>
		<input />
		<button>Send Request</button>
	</form>
);

SearchForm.propTypes = {

};

export default SearchForm;
