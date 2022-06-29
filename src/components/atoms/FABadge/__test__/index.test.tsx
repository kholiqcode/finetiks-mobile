import React from 'react';

import { render } from '@mocks';

import { FABadge } from '@components/atoms';

describe('FABadge', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FABadge testID="badge-example">Test</FABadge>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FABadge testID="badge-example">Test</FABadge>);

    expect(getByText('Test')).toBeTruthy();
  });
});
