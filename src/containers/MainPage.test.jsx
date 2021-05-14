import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('Main page', () => {
  afterEach(() => cleanup());
  
  it('renders main page', () => {
    render(
		<MainPage />
	);

  // checking for page title
	screen.getByText('RESTlr');

  // checking for accessibility of form components
  const searchForm = screen.getByRole('form', { name: 'request-form' });
  const addressInput = screen.getByRole('textbox', { name: 'address-field'});
  const get = screen.getByRole('radio', { name: 'GET' });
  const post = screen.getByRole('radio', { name: 'POST' });
  const put = screen.getByRole('radio', { name: 'PUT' });
  const patch = screen.getByRole('radio', { name: 'PATCH' });
  const del = screen.getByRole('radio', { name: 'DELETE' });
  const bodyInput = screen.getByRole('textbox', { name: 'request-body' });

  // checking for presence of history list
  const historyList = screen.getByRole('list', { name: 'request-history' });

  // checking for presence of results area
  const resultsDisplay = screen.getByLabelText('search-results');
	
  });
});