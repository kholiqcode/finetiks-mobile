import React from 'react';

import { fireEvent, render } from '@mocks';

import { FAButton } from '@components/atoms';

describe('FAButton', () => {
  it('should render correctly', () => {
    const container = render(<FAButton>Test</FAButton>);

    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FAButton>Test</FAButton>);

    expect(getByText('Test')).toBeDefined();
  });

  it('should increment number on click', () => {
    let number = 1;
    const { getByText } = render(
      <FAButton
        onPress={() => {
          number += 1;
        }}
      >
        FAButton
      </FAButton>,
    );

    fireEvent.press(getByText('FAButton'));

    expect(number).toBe(2);
  });
});
