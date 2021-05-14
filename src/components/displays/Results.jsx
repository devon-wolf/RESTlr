import React from 'react';
import PropTypes from 'prop-types';
import style from './Results.css';

const Results = ({ results }) => (
	<section aria-label="search-results" className={style.resultsSection}>
		<p>Here are some badly formatted results:</p>
		<p>{JSON.stringify(results)}</p>
	</section>
);

Results.propTypes = {
	results: PropTypes.any.isRequired
};

export default Results;
