import React from 'react';

import { render } from '@mocks';

import { Intro } from '@screens';

describe('Splash_Screen', () => {
  it('Render Splash screen', () => {
    const intro = render(<Intro />);
    expect(intro).toBeDefined();
  });
});
