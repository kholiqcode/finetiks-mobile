import React from 'react';

import { fireEvent, render } from '@mocks';

import { FAInput } from '@components/atoms';

describe('FAInput', () => {
  it('should render correctly', () => {
    const container = render(<FAInput />);

    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByPlaceholderText } = render(<FAInput size="xs" placeholder="Test Input" />);

    expect(getByPlaceholderText('Test Input')).toBeDefined();
  });

  it('should can change text input', () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <FAInput testID="test-input" size="xs" placeholder="Test Input" onChangeText={mock} />,
    );

    const inputEmail = getByTestId('test-input');
    expect(inputEmail).toBeDefined();
    fireEvent.changeText(inputEmail, 'email@testing.com');
    expect(mock).toHaveBeenCalledWith('email@testing.com');
  });

  it('should can show leftAddon', () => {
    const leftAddon = 'mock';
    const { getByTestId } = render(<FAInput leftAddon={leftAddon} />);

    expect(getByTestId('leftAddon')).toBeDefined();
  });

  it('should can show rightAddon', () => {
    const rightAddon = 'mock';
    const { getByTestId } = render(<FAInput rightAddon={rightAddon} />);

    expect(getByTestId('rightAddon')).toBeDefined();
  });
});
