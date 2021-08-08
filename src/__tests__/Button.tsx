import Button, { ButtonProps } from '@atoms/Button';
import { render, screen } from '@testing-library/react';

test('Button is created with text', () => {
  const testText = 'Click';
  const buttonProps: ButtonProps = { text: testText };
  render(<Button {...buttonProps} />);
  const button = screen.getByRole('button', { name: testText });
  expect(button).toBeInTheDocument();
});
