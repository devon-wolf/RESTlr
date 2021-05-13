import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.css';

const SearchForm = ({ handleFormSubmit, handleAddressChange, handleRadioChange, handleBodyChange, addressValue, radioValue, bodyValue }) => (
	<form
		className={style.searchForm}
		onSubmit={handleFormSubmit}
		aria-label="request-form"
	>
		<input
			value={addressValue}
			aria-label="address field"
			onInput={handleAddressChange}
		/>

		<label>
			
			<input
				type="radio"
				name="method"
				value="GET"
				checked={radioValue === 'GET'}
				onChange={handleRadioChange}
			/>
			<span>GET</span>
		</label>

		<label>
			
			<input
				type="radio"
				name="method"
				value="POST"
				checked={radioValue === 'POST'}
				onChange={handleRadioChange}
			/>
			<span>POST</span>
		</label>

		<label>
			
			<input
				type="radio"
				name="method"
				value="PUT"
				checked={radioValue === 'PUT'}
				onChange={handleRadioChange}
			/>
			<span>PUT</span>
		</label>

		<label>
			
			<input 
				type="radio"
				name="method"
				value="PATCH"
				checked={radioValue === 'PATCH'}
				onChange={handleRadioChange}
			/>
			<span>PATCH</span>
		</label>

		<label>
			
			<input
				type="radio"
				name="method"
				value="DELETE"
				checked={radioValue === 'DELETE'}
				onChange={handleRadioChange}
			/>
			<span>DELETE</span>
		</label>

		<textarea 
			value={bodyValue}
			aria-label="request-body"
			onInput={handleBodyChange}
		>
		</textarea>

		<button>Send Request</button>
	</form>
);

SearchForm.propTypes = {
	handleFormSubmit: PropTypes.func.isRequired,
	handleAddressChange: PropTypes.func.isRequired,
	handleRadioChange: PropTypes.func.isRequired,
	handleBodyChange: PropTypes.func.isRequired,
	addressValue: PropTypes.string.isRequired,
	radioValue: PropTypes.string.isRequired,
	bodyValue: PropTypes.string.isRequired
};

export default SearchForm;
