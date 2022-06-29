import React from 'react';

import { fireEvent, render } from '@mocks';

import { FATextArea } from '@components/atoms';

describe('FATextArea', () => {
  it('should render correctly', () => {
    const container = render(<FATextArea />);

    expect(container).toBeDefined();
  });

  it('should can change text textArea', () => {
    const mock = jest.fn();

    const { getByPlaceholderText } = render(
      <FATextArea numberOfLines={4} placeholder="TextArea" onChangeText={mock} />,
    );

    const textAreaEmail = getByPlaceholderText('TextArea');
    expect(textAreaEmail).toBeDefined();
    fireEvent.changeText(textAreaEmail, 'email@testing.com');
    expect(mock).toHaveBeenCalledWith('email@testing.com');
  });
});
