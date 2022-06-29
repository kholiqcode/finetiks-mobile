import React from 'react';

import { render } from '@mocks';

import { FASwitch } from '@components/atoms';

describe('FASwitch', () => {
  it('should render correctly', () => {
    const container = render(<FASwitch />);

    expect(container).toBeDefined();
  });
});
