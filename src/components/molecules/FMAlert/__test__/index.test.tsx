import React from 'react';

import { render } from '@mocks';

import { FMAlert } from '@components/molecules';

describe('FMAlert', () => {
  it('should render correctly with correct title and description', () => {
    const { getByText } = render(<FMAlert title="this is title" description="this is desc" />);

    expect(getByText('this is title')).toBeDefined();
    expect(getByText('this is desc')).toBeDefined();
  });
});
