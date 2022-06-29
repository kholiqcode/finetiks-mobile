import React from 'react';

import { render } from '@mocks';

import { FARadio } from '@components/atoms';

describe('FARadio', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FARadio value="test" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(<FARadio testID="test-radio" value="test" />);

    expect(getByTestId('test-radio')).toBeTruthy();
  });
});
