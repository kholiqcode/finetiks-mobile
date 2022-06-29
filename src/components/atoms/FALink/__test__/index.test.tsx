import React from 'react';

import { render } from '@mocks';

import { FALink } from '@components/atoms';

describe('FALink', () => {
  it('should render correctly', () => {
    const container = render(<FALink>Test</FALink>);

    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FALink>Test</FALink>);

    expect(getByText('Test')).toBeDefined();
  });
});
