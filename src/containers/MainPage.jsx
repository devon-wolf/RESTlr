import React, { Component } from 'react';
import style from './MainPage.css';
import SearchForm from '../components/controls/SearchForm';
import Results from '../components/displays/Results';
import HistoryList from '../components/displays/HistoryList';

export default class MainPage extends Component {
	render() {
		return (
			<div className={style.mainPage}>
				<header>RESTLAB</header>
				<SearchForm />
				<Results 
					results="this is a result"
				/>
				<HistoryList
					history={[{
						method: 'GET',
						URL: 'http://blahblahtest.com'
					}]}
				/>
			</div>
		)
	}
}
