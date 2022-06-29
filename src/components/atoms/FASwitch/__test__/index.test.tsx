import React from 'react';

import { render } from '@mocks';

import { FASwitch } from '@components/atoms';

describe('FASwitch', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FASwitch />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(<FASwitch testID="test-switch" size="md" />);

    expect(getByTestId('test-switch')).toBeTruthy();
  });
});
