import React from 'react';

import { render } from '@mocks';

import { FASpinner } from '@components/atoms';

describe('FASpinner', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FASpinner>Test</FASpinner>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(<FASpinner testID="spinner-example">Test</FASpinner>);

    expect(getByTestId('spinner-example')).toBeTruthy();
  });
});
