import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MultiStepInquiryForm } from '../components/MultiStepInquiryForm';

const renderForm = () => {
  return render(
    <BrowserRouter>
      <MultiStepInquiryForm />
    </BrowserRouter>
  );
};

describe('MultiStepInquiryForm', () => {
  it('renders Step 1 initially with options', () => {
    renderForm();
    expect(screen.getByText("Quin tipus d'experiència estàs planejant?")).toBeInTheDocument();
    expect(screen.getByText('Estada Privada')).toBeInTheDocument();
    expect(screen.getByText('Celebració Íntima')).toBeInTheDocument();
    expect(screen.getByText('Trobada d’Empresa')).toBeInTheDocument();
  });

  it('navigates to Step 2 and requires valid dates', () => {
    renderForm();
    const nextBtn = screen.getByRole('button', { name: /següent pas/i });
    fireEvent.click(nextBtn);

    // Now in Step 2
    expect(screen.getByText(/Quan t’agradaria vindre i quantes persones sereu/i)).toBeInTheDocument();

    // Trying to advance without entering dates should show validation errors
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Indica la data d’arribada/i)).toBeInTheDocument();
  });

  it('allows going back to Step 1 from Step 2 without losing state', () => {
    renderForm();
    const nextBtn = screen.getByRole('button', { name: /següent pas/i });
    fireEvent.click(nextBtn);

    const prevBtn = screen.getByRole('button', { name: /anterior/i });
    fireEvent.click(prevBtn);

    expect(screen.getByText("Quin tipus d'experiència estàs planejant?")).toBeInTheDocument();
  });

  it('supports selecting different inquiry types', () => {
    renderForm();
    const celebrationOption = screen.getByText('Celebració Íntima');
    fireEvent.click(celebrationOption);

    const nextBtn = screen.getByRole('button', { name: /següent pas/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText(/Data de la celebració/i)).toBeInTheDocument();
  });
});

