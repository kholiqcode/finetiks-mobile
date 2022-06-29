import React from 'react';

import { render } from '@mocks';

import { FASelect } from '@components/atoms';

describe('FASelect', () => {
  it('should render correctly', () => {
    const container = render(<FASelect data={[]} />);

    expect(container).toBeDefined();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(
      <FASelect
        testID="test-select"
        data={[
          {
            value: '1',
            label: 'UX Research',
          },
          {
            value: '2',
            label: 'Web Development',
          },
          {
            value: '1',
            label: 'UX Research',
          },
        ]}
      />,
    );

    expect(getByTestId('test-select')).toBeDefined();
  });
});
