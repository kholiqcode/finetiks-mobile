import React from 'react';

import { render } from '@mocks';

import { FAIcon } from '@components/atoms';

describe('FAIcon', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAIcon />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(
      <FAIcon testID="icon-example" name="home" size={30} color={'primary.500'} />,
    );

    expect(container).toBeTruthy();
  });
});
