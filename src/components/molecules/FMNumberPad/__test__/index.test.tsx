import React from 'react';

import { render } from '@mocks';

import { FMNumberPad } from '@components/molecules';

describe('FMNumberPad', () => {
  it('should render correctly ', () => {
    const screen = render(<FMNumberPad />);
    expect(screen).toBeDefined();
  });
});
