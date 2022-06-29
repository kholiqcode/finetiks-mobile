import React from 'react';

import { fireEvent, render } from '@mocks';

import { FAInput } from '@components/atoms';

describe('FAInput', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAInput />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(<FAInput size="xs" placeholder="Test Input" />);

    expect(container).toBeTruthy();
  });

  it('should can change text input', () => {
    const { getByTestId } = render(
      <FAInput testID="test-input" size="xs" placeholder="Test Input" />,
    );

    const inputEmail = getByTestId('test-input');
    expect(inputEmail).toBeTruthy();
    fireEvent.changeText(inputEmail, 'email@testing.com');
  });
});
