import React from 'react';
import { render, screen } from '@testing-library/react';
//  import '@testing-library/jest-dom';

import { Button } from './Button';

test('Button primary', async () => {
  const props = {
    label: 'Agregar',
    primary: true,
  };

  render(<Button {...props} />);
  const btnAdd = screen.getByRole('button', { name: 'Agregar' });
  expect(btnAdd).toBeInTheDocument();
  expect(btnAdd).toHaveClass('storybook-button--secondary');
});
test('Button secondary', async () => {
  const props = {
    label: 'Agregar',
    primary: false,
  };

  render(<Button {...props} />);
  const btnAdd = screen.getByRole('button', { name: 'Agregar' });
  expect(btnAdd).toBeInTheDocument();
  expect(btnAdd).toHaveClass('storybook-button--secondary');
});
