import React from 'react';

import { render } from '@mocks';

import { RegisterSuccess } from '@screens';

describe('RegisterSuccess_Screen', () => {
  it('Render RegisterSuccess screen', () => {
    const screen = render(<RegisterSuccess />);
    expect(screen).toBeDefined();
  });
});
