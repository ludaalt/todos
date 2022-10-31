import React, { DOMElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import TodoItem from './components/TodoItem';

describe('render TodoItem', () => {
  const todo = {
    id: 0,
    title: 'testing TodoItem',
    isComplete: false,
    isShow: true,
  };
  it('should render correctly', () => {
    const { asFragment } = render(<TodoItem item={todo} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('testing TodoItem')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});

it('enter TodoItem', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?') as any;

  userEvent.type(input, 'check');
  expect(screen.getByRole('textbox')).toHaveValue('check');

  userEvent.keyboard('{enter}');
  expect(screen.getByRole('textbox')).toHaveValue('');

  expect(screen.getByText(/check/i)).toBeInTheDocument();
});

it('work clear button', () => {
  render(<App />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  userEvent.click(screen.getByText('Clear completed'));
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
