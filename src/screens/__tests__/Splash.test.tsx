import React from 'react';

import { cleanup, render, setupTimeTravel, timeTravel } from '@mocks';

import { Splash } from '@screens';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

beforeEach(() => {
  setupTimeTravel();
});

afterEach(cleanup);

describe('Splash_Screen', () => {
  it('Render Splash screen', () => {
    const splash = render(<Splash />);
    timeTravel(500);
    expect(splash).toBeDefined();
  });
});
