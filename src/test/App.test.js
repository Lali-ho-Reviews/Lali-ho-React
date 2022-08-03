import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
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

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

