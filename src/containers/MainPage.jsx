import React, { Component } from 'react';
import style from './MainPage.css';
import SearchForm from '../components/controls/SearchForm';
import Results from '../components/displays/Results';
import HistoryList from '../components/displays/HistoryList';
import { makeRequest } from '../services/api-utils';

export default class MainPage extends Component {
	state = {
		address: '',
		radio: 'GET',
		body: '',
		history: [{
			method: 'GET',
			URL: 'http://blahblahtest.com'
		}],
		results: '[{ this: is not a real result}]'
	}

	handleFormSubmit = async e => {
		e.preventDefault();
		const { address, radio, body } = this.state;
		let results;
		try {
			results = await makeRequest(radio, address, body);
		}
		catch (error) {
			results = `Something went wrong: ${error}`
		}

		this.setState({ results });
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
		const { address, radio, body, history, results } = this.state;
		
		return (
			<div className={style.mainPage}>
				<header>
					<h1>RESTlr</h1>
				</header>
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
					results={results}
				/>
				<HistoryList
					history={history}
				/>
			</div>
		)
	}
}
