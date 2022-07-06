import React from 'react';

import { cleanup, render } from '@mocks';

import { SelectLanguage } from '@screens';

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

describe('SelectLanguage_Screen', () => {
  it('Render SelectLanguage screen', () => {
    const selectLanguage = render(<SelectLanguage />);
    expect(selectLanguage).toBeDefined();
  });
});
