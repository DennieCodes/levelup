import React from 'react';
import { Hello } from './Hello';
import { render, screen } from '@testing-library/react';

it('Renders Hello World', () => {
	render(<Hello />);
	const myElement = screen.getByText('Hello World!');
	expect(myElement).toBeInTheDocument();
});
