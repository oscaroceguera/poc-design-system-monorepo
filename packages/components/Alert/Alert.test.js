import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from './Alert';

test('Alert Base', () => {
  render(<Alert />);

  const element = screen.getByTestId('alert-element');

  expect(element).toBeInTheDocument();
});
