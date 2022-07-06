import React from 'react';

import { render } from '@mocks';

import { LoginPin } from '@screens';

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

describe('LoginPin_Screen', () => {
  it('Render LoginPin screen', () => {
    const screen = render(<LoginPin />);
    expect(screen).toBeDefined();
  });
});
