import React from 'react';

import { render } from '@mocks';
import { Box } from 'native-base';

import { FLAuth } from '@components/layout';

describe('FLAuth', () => {
  it('should render correctly with children', () => {
    const container = render(<FLAuth children={<Box />} />);

    expect(container).toBeDefined();
  });

  it('should render with title', () => {
    const { getByText } = render(<FLAuth children={<Box />} title="This is title" />);

    expect(getByText('This is title')).toBeDefined();
  });

  it('should render with description', () => {
    const { getByText } = render(<FLAuth children={<Box />} description="This is desc" />);

    expect(getByText('This is desc')).toBeDefined();
  });
});
