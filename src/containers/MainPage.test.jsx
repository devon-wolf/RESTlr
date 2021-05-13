import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('Main page', () => {
  afterEach(() => cleanup());
  it('renders main page', () => {
    render(
		<MainPage />
	);

	screen.getByText('RESTLAB');
	
  });
});