import React from 'react';

import { render } from '@mocks';

import { LoginPhone } from '@screens';

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

describe('LoginPhone_Screen', () => {
  it('Render LoginPhone screen', () => {
    const screen = render(<LoginPhone />);
    expect(screen).toBeDefined();
  });
});
