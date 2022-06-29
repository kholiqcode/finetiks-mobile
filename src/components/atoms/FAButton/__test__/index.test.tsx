import React from 'react';

import { fireEvent, render } from '@mocks';

import { FAButton } from '@components/atoms';

describe('FAButton', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAButton testID="button-example">Test</FAButton>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FAButton testID="button-example">Test</FAButton>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should increment number on click', () => {
    let number = 1;
    const { getByTestId } = render(
      <FAButton
        testID="button-example"
        onPress={() => {
          number += 1;
        }}
      >
        FAButton
      </FAButton>,
    );

    fireEvent.press(getByTestId('button-example'));

    expect(number).toBe(2);
  });
});
