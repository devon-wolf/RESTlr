import React from 'react';
import PropTypes from 'prop-types';
import style from './HistoryList.css';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => (
	<ul className={style.historyList}>
		{history.map((item, idx) => (
			<li key={`${item.method}-${item.url}-{idx}`}>
				<HistoryItem
					method={item.method}
					URL={item.URL}
				/>
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

