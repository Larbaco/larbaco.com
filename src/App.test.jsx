import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main navigation', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /currículo/i })).toBeInTheDocument();
  });
});
