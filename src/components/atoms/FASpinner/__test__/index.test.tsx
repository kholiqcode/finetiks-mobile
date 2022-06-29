import React from 'react';

import { render } from '@mocks';

import { FASpinner } from '@components/atoms';

describe('FASpinner', () => {
  it('should render correctly', () => {
    const container = render(<FASpinner>Test</FASpinner>);

    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FASpinner>Test</FASpinner>);

    expect(getByText('Test')).toBeDefined();
  });
});
