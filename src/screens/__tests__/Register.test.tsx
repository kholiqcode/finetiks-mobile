import React from 'react';

import { cleanup, render, setupTimeTravel, timeTravel } from '@mocks';

import { Register } from '@screens';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

beforeEach(() => {
  setupTimeTravel();
});

afterEach(cleanup);

describe('Register_Screen', () => {
  it('Render Register screen', () => {
    const register = render(<Register />);
    timeTravel(500);
    expect(register).toBeDefined();
  });
});
