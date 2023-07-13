import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('/about route', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/about']}>
            <App />
        </MemoryRouter>
    );
    expect(getByText('Welcome to our dog-loving community!')).toBeInTheDocument();
});


