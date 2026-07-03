import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main navigation', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation');

    expect(within(navigation).getByRole('link', { name: /projetos/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /sobre/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /contato/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /currículo/i })).toBeInTheDocument();
  });
});
