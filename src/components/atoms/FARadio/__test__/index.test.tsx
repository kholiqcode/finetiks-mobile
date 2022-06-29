import React from 'react';

import { render } from '@mocks';

import { FARadio } from '@components/atoms';

describe('FARadio', () => {
  it('should render correctly', () => {
    const container = render(<FARadio value="test" />);

    expect(container).toBeDefined();
  });
});
