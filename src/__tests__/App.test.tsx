import React from 'react';

import { render } from '@mocks';

import App from '../index';

describe('App', () => {
  test('should render App correctly', () => {
    const rendered = render(<App />);

    expect(rendered).toBeDefined();
  });
});
