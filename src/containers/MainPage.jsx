import React, { Component } from 'react';
import style from './MainPage.css';
import SearchForm from '../components/controls/SearchForm';
import Results from '../components/displays/Results';
import HistoryList from '../components/displays/HistoryList';

export default class MainPage extends Component {
	state = {
		address: 'endpoint goes here',
		radio: 'GET',
		body: 'JSON goes here'
	}

	handleFormSubmit = async e => {
		e.preventDefault();
		console.log('FORM SUBMITTED');
	}

	handleAddressChange = e => {
		this.setState({ address: e.target.value });
	}

	handleRadioChange = e => {
		this.setState({ radio: e.target.value });

	}

	handleBodyChange = e => {
		this.setState({ body: e.target.value });
	}


	render() {
		const { address, radio, body } = this.state;
		return (
			<div className={style.mainPage}>
				<header>RESTLAB</header>
				<SearchForm 
					handleFormSubmit={this.handleFormSubmit}
					handleAddressChange={this.handleAddressChange}
					handleRadioChange={this.handleRadioChange}
					handleBodyChange={this.handleBodyChange}
					addressValue={address}
					radioValue={radio}
					bodyValue={body}
				/>
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
