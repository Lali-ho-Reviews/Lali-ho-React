import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders footer', () => {
  const { getByText } = render (<App/>);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navigation ', () => {
  const { getByText } = render (<App/>);
  const linkElement = getByText(/free companies/i);
  expect(linkElement).toBeInTheDocument();
});