import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// test('about route in navbar', async () => {
//     const { getByText } = render(
//         <MemoryRouter initialEntries={['/']}>
//             <App />
//         </MemoryRouter>
//     );
//     expect(getByText('Loading', { exact: false })).toBeInTheDocument()
//     const link = getByText('About');
//     fireEvent.click(link)
//     expect(getByText('About Us')).toBeInTheDocument()
// })

test('about route in navbar', async () => {
    const { getByText, findByText } = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    // Wait for the "About" link to appear and then click it
    const link = findByText('About');
    fireEvent.click(link);

    // Check if "About Us" content is present after the click
    expect(getByText('About Us')).toBeInTheDocument();
});
