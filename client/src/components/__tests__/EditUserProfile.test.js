import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditUserProfile from './../pages/UserProfile/EditUserProfile';

describe('Edit User Form Component', () => {
  it('Should render value in input email', () => {
    render(<EditUserProfile />);
    const inputElement = screen.getByPlaceholderText('Podaj email');
    fireEvent.change(inputElement, { target: { value: 'mati@gmail.com' } });
    expect(inputElement.value).toBe('mati@gmail.com');
  });
  it('Should render value in input imie', () => {
    render(<EditUserProfile />);
    const inputElement = screen.getByPlaceholderText('Podaj imię');
    fireEvent.change(inputElement, { target: { value: 'Mateusz' } });
    expect(inputElement.value).toBe('Mateusz');
  });
  it('Should render value in input nazwisko', () => {
    render(<EditUserProfile />);
    const inputElement = screen.getByPlaceholderText('Podaj nazwisko');
    fireEvent.change(inputElement, { target: { value: 'Izdebski' } });
    expect(inputElement.value).toBe('Izdebski');
  });
  it('Should render value in input twoj opis', () => {
    render(<EditUserProfile />);
    const inputElement = screen.getByPlaceholderText('Twój opis');
    fireEvent.change(inputElement, { target: { value: 'moj opis' } });
    expect(inputElement.value).toBe('moj opis');
  });
  it('Should render value in input nr telefonu', () => {
    render(<EditUserProfile />);
    const inputElement = screen.getByPlaceholderText('Podaj numer tel');
    fireEvent.change(inputElement, { target: { value: '432432432' } });
    expect(inputElement.value).toBe('432432432');
  });
  it('Should render text in FormLabelEmail', () => {
    render(<EditUserProfile />);
    const headingElement = screen.getByTestId('FormLabelEmail');
    expect(headingElement.textContent).toBe('Email:');
  });
  it('Should render text in FormLabelImie', () => {
    render(<EditUserProfile />);
    const headingElement = screen.getByTestId('FormLabelName');
    expect(headingElement.textContent).toBe('Imie:');
  });
});
