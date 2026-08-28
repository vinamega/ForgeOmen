// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeOmen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeOmen/i);
    expect(titleElement).toBeInTheDocument();
});
