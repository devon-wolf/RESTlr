import React from 'react';
import PropTypes from 'prop-types';
import style from './HistoryList.css';

const HistoryList = ({ history }) => (
	<ul className={style.historyList}>
		{history.map(item => (
			<li>
				<span>
					{item.method} {item.URL}
				</span>
			</li>
		))}
	</ul>
);

HistoryList.propTypes = {
	history: PropTypes.arrayOf(
		PropTypes.shape({
			method: PropTypes.string.isRequired,
			URL: PropTypes.string.isRequired
		}
		)
	).isRequired
};

export default HistoryList;

