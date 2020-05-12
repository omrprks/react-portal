import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  Default as App,
  innerText,
} from './app.story';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders with expected text content', () => {
    const unexpectedMessage = 'Not Hello World?';

    render(<App />);

    expect(screen.queryByText(unexpectedMessage)).toBeNull();
    expect(screen.getByText(innerText)).toBeDefined();
  });
});
