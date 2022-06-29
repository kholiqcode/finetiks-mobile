import React from 'react';

import { render } from '@mocks';

import { FMAlert } from '@components/molecules';

describe('FMAlert', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FMAlert />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(
      <FMAlert testID="alert-example" variant={'solid'} title={'Selection successfully moved!'} />,
    );

    expect(container).toBeTruthy();
  });
});
