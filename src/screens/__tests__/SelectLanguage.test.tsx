import React from 'react';

import { cleanup, render, setupTimeTravel, timeTravel } from '@mocks';

import { SelectLanguage } from '@screens';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

beforeEach(() => {
  setupTimeTravel();
});

afterEach(cleanup);

describe('SelectLanguage_Screen', () => {
  it('Render SelectLanguage screen', () => {
    const selectLanguage = render(<SelectLanguage />);
    timeTravel(500);
    expect(selectLanguage).toBeDefined();
  });
});
