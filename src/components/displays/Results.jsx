import React from 'react';
import PropTypes from 'prop-types';
import style from './Results.css';

const Results = ({ results }) => (
	<section className={style.resultsSection}>
		<p>Here are some badly formatted results:</p>
		<p>{results}</p>
	</section>
);

Results.propTypes = {
	results: PropTypes.any.isRequired
};

export default Results;
