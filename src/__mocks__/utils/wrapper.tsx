import React, { PropsWithChildren } from 'react';

import { render } from '@testing-library/react-native';
import { Container, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';

import { setupStore } from '@store';
import { themes } from '@theme';

import type { PreloadedState } from '@reduxjs/toolkit';
import type { AppStore, RootState } from '@store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <NativeBaseProvider
        theme={themes}
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Provider store={store}>{children}</Provider>
      </NativeBaseProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <NativeBaseProvider
      theme={themes}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Provider store={setupStore({})}>
        <Container>{children}</Container>
      </Provider>
    </NativeBaseProvider>
  );
};

// const customRender = (ui: JSX.Element, options?: any) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { renderWithProviders as render };
