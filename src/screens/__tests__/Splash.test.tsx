import React from 'react';

import { render, setupTimeTravel, timeTravel } from '@mocks';

import { Splash } from '@screens';

beforeEach(() => {
  setupTimeTravel();
});

describe('Splash_Screen', () => {
  it('Render Splash screen', () => {
    const splash = render(<Splash />);
    timeTravel(500);
    expect(splash).toBeDefined();
  });
});
