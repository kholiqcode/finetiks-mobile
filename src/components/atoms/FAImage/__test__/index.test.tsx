import React from 'react';

import { render } from '@mocks';

import { FAImage } from '@components/atoms';

describe('FAImage', () => {
  it('should render correctly', () => {
    const container = render(<FAImage alt="Test" />);

    expect(container).toBeDefined();
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

    expect(container).toBeDefined();
  });
});
