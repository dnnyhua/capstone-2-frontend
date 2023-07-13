import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('about route in navbar', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    expect(getByText('Loading', { exact: false })).toBeInTheDocument()
    const link = getByText('About');
    fireEvent.click(link)
    expect(getByText('About Us')).toBeInTheDocument()
})