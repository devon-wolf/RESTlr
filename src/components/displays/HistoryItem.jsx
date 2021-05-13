import React from 'react';
import PropTypes from 'prop-types';
import style from './HistoryItem.css';

const HistoryItem = ({ method, URL }) => (
	<span className={style.historyItem}>
		{method} {URL}
	</span>
);

HistoryItem.propTypes = {
	method: PropTypes.string.isRequired,
	URL: PropTypes.string.isRequired
};

export default HistoryItem;