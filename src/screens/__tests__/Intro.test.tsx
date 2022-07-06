import React from 'react';

import { cleanup, render } from '@mocks';

import { Intro } from '@screens';

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

afterEach(cleanup);

describe('Intro_Screen', () => {
  it('Render Intro screen', () => {
    const intro = render(<Intro />);
    expect(intro).toBeDefined();
  });
});
