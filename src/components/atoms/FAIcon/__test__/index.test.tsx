import React from 'react';

import { render } from '@mocks';

import { FAIcon } from '@components/atoms';

describe('FAIcon', () => {
  it('should render correctly with default type', () => {
    const container = render(<FAIcon />);

    expect(container).toBeDefined();
  });

  it('should render with Ionicons type', () => {
    const icon = 'ionicons';
    const container = render(<FAIcon type={icon} />);

    expect(container).toBeDefined();
  });

  it('should render with Feather type', () => {
    const icon = 'feather';
    const container = render(<FAIcon type={icon} />);

    expect(container).toBeDefined();
  });
});
