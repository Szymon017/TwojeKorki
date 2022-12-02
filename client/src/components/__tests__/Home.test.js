import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {
  it('Should render text in h1', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByTestId('heading');
    expect(headingElement.textContent).toBe('Witaj na stronie');
  });
  it('Should render text in h1v2', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByTestId('heading2');
    expect(headingElement.textContent).toBe('TwojeKorki');
  });
  it('Should render text in h4', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByTestId('heading3');
    expect(headingElement.textContent).toBe('Trafiłeś w idealne miejsce! ');
  });
});
