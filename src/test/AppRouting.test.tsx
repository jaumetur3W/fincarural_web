import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppContent } from '../AppContent';

describe('App Routing', () => {
  it('renders HomePage at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByText(/Un lloc per a estar, reunir-se i celebrar/i)).toBeInTheDocument();
  });

  it('renders StaysPage at /estades', () => {
    render(
      <MemoryRouter initialEntries={['/estades']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Estades Privades/i })).toBeInTheDocument();
  });

  it('renders CorporatePage at /encuentres', () => {
    render(
      <MemoryRouter initialEntries={['/encuentres']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Encuentres de Empresa/i })).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/ruta-inexistent-xyz']}>
        <AppContent />
      </MemoryRouter>
    );
    expect(screen.getByText(/Pàgina no trobada/i)).toBeInTheDocument();
  });
});

