import React from 'react';

import { render } from '@mocks';

import { FABadge } from '@components/atoms';

describe('FABadge', () => {
  it('should render correctly', () => {
    const container = render(<FABadge>Test</FABadge>);
    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FABadge>Test</FABadge>);
    expect(getByText('Test')).toBeDefined();
  });
});
