import React from 'react';

import { cleanup, render, setupTimeTravel } from '@mocks';

import { Intro } from '@screens';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

beforeEach(() => {
  setupTimeTravel();
});

afterEach(cleanup);

describe('Intro_Screen', () => {
  it('Render Intro screen', () => {
    const intro = render(<Intro />);
    expect(intro).toBeDefined();
  });
});
