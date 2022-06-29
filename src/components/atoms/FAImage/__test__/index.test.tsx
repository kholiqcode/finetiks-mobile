import React from 'react';

import { render } from '@mocks';

import { FAImage } from '@components/atoms';

describe('FAImage', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAImage alt="Test" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(
      <FAImage
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Test"
        size="xs"
      />,
    );

    expect(container).toBeTruthy();
  });
});
