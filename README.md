# :pushpin: React Native Finetiks

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kholiqcode_finetiks-mobile&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kholiqcode_finetiks-mobile)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kholiqcode_finetiks-mobile&metric=coverage)](https://sonarcloud.io/summary/new_code?id=kholiqcode_finetiks-mobile)
[![CD-Deploy Android to Firebase](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/cd-android.yml/badge.svg)](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/cd-android.yml)
[![CI-Check Commit & Code Analyze](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-build.yml/badge.svg)](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-build.yml)
[![CI-Android](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-android.yml/badge.svg)](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-android.yml)
[![CI-iOS](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-ios.yml/badge.svg)](https://github.com/kholiqcode/finetiks-mobile/actions/workflows/ci-ios.yml)

React Native finetiksapp repository version 0.0.1

## ⚡️Getting Started

Make sure you already React Native environment running in you machine. Please refer to the official [docs](https://reactnative.dev/docs/getting-started)

### :hammer_and_pick: Configurations

1. Change package name, bundle id (iOS) or application id (android).
   Reference:
   - [Change package name](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3)
2. Create your own keystore and key.properties.
   Reference:
   - [App Signing (keystore)](https://developer.android.com/studio/publish/app-signing)
   - [Create keystore using Keytool](https://reactnative.dev/docs/signed-apk-android)
3. Setup your firebase project for firebase analytics, crashlytics, and messaging.
   Reference:
   - [Understand Firebase Project](https://firebase.google.com/docs/projects/learn-more)
   - [Firebase for React Native](https://rnfirebase.io/)
4. Setup your android and ios project to integrate with Fastlane and Firebase
   Reference:
   - [Fastlane Official Documentation](https://docs.fastlane.tools/)
   - [Firebase Official Documentation for Android App](https://firebase.google.com/docs/app-distribution/android/distribute-fastlane)
   - [Firebase Official Documentation for iOS App](https://firebase.google.com/docs/app-distribution/ios/distribute-fastlane)
   - [Simple Fastlane and Firebase integration](https://github.com/JesuHrz/distribution-with-firebase-and-fastlane)
5. Configure your env with [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
6. Using [Atomic Design Pattern](https://paulonteri.com/thoughts/atomic-design-react)
7. Using [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/) and [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for services
8. Using [Native Base](https://nativebase.io/) UI material to design this finetiksapp

### 🚚 How to run, and build Apk

NOTES: This finetiksapp uses `yarn` as main command, not `npm`.

To make sure android emulator have the same port with metro bundler, run this command first

```shell
yarn android:local
```

Example how to run android with development env

```shell
yarn android:local
yarn run:android-debug
```

Example how to run android with staging env

```shell
yarn android:local
yarn run:android-staging
```

Example how to run android with production env

```shell
yarn android:local
yarn run:android-prod
```

If there is any error when running these commands, try to run with Android Studio

Example how to build android with prod env release variant

```shell
yarn release:android
```

If there is any error when running this command, try to build with Android Studio

Example how to run ios with development env

```shell
yarn run:ios-debug
```

Example how to run ios with staging env

```shell
yarn run:ios-staging
```

Example how to run ios with production env

```shell
yarn run:ios-prod
```

If there is any error when running these commands, try to run with Xcode

### ⚙️ Supported Flavor

1. development
2. production
3. staging

In android there are 3 product flavor: `dev`, `prod`, `staging`.
In iOS there are 3 scheme: `Finetiks`, `Finetiks Prod`, `Finetiks Staging`.
All of them are already correspond with the env.

### :new: Versioning

Using Semantic Versioning 2.0.0

Major.Minor.Patch

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner, and
3. PATCH version when you make backwards compatible bug fixes.
   Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

### :capital_abcd: Naming Convention

camelCase for file and folder.

### :beach_umbrella: Theme

Using [Native-Base Theme](https://docs.nativebase.io/customizing-theme), we can create and/or modify existing variant of the component. It also supports [dark mode](https://docs.nativebase.io/dark-mode). Here's example of adding dark mode style and add new variant to Button component.

```javascript
const Button = {
  // You can insert dark theme mode here
  // mode(first, second) -> first is for light theme, second is for dark theme
  baseStyle: (props: any) => {
    return {
      color: themeTools.mode('red.300', 'blue.300')(props),
    };
  },
  // You can also define or modify existing variant of component here
  variants: {
    solid: (props: any) => {
      return {
        _text: {
          fontFamily: props.fontFamily,
          fontWeight: props.fontWeight,
        },
        ...props,
      };
    },
    outlineLime: (props: any) => {
      return {
        borderWidth: '1',
        borderColor: 'current.100',
        _text: {
          color: 'current.100',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
  },
};
// You need to insert this object to the native-base's extendTheme function
```

### :evergreen_tree: At this point, your project layout should look like this:

```
react-native-finetiksapp
├─ .buckconfig
├─ .bundle
│  └─ config
├─ .commitlintrc.json
├─ .eslintignore
├─ .eslintrc.js
├─ .github
│  └─ workflows
│     └─ build.yml
├─ .gitignore
├─ .husky
│  ├─ _
│  │  ├─ .gitignore
│  │  └─ husky.sh
│  ├─ commit-msg
│  └─ pre-commit
├─ .prettierignore
├─ .prettierrc.js
├─ .ruby-version
├─ .vscode
│  ├─ .react
│  └─ settings.json
├─ .watchmanconfig
├─ CHANGELOG.md
├─ Gemfile
├─ LICENSE
├─ __mocks__
│  ├─ @react-native-async-storage
│  │  └─ async-storage.ts
│  ├─ helpers.tsx
│  ├─ react-i18next
│  │  └─ index.js
│  ├─ timeTravel.ts
│  └─ wrapper.tsx
├─ android
│  ├─ Gemfile
│  ├─ Gemfile.lock
│  ├─ fastlane
│  │  ├─ .env
│  │  ├─ Appfile
│  │  ├─ Fastfile
│  │  ├─ Pluginfile
│  │  ├─ README.md
│  │  └─ report.xml
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ babel.config.json
├─ index.js
├─ ios
│  ├─ Config.xcconfig
│  ├─ Gemfile
│  ├─ Gemfile.lock
│  ├─ Podfile
│  ├─ Podfile.lock
│  └─ fastlane
│     ├─ Appfile
│     ├─ Fastfile
│     └─ Pluginfile
├─ jest.config.js
├─ jest.setup.js
├─ metro.config.js
├─ package.json
├─ react-native.config.js
├─ sonar-project.properties
├─ src
│  ├─ __tests__
│  │  └─ App.test.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ OpenSans
│  │  │  │  ├─ OpenSans-Bold.ttf
│  │  │  │  ├─ OpenSans-BoldItalic.ttf
│  │  │  │  ├─ OpenSans-ExtraBold.ttf
│  │  │  │  ├─ OpenSans-ExtraBoldItalic.ttf
│  │  │  │  ├─ OpenSans-Italic.ttf
│  │  │  │  ├─ OpenSans-Light.ttf
│  │  │  │  ├─ OpenSans-LightItalic.ttf
│  │  │  │  ├─ OpenSans-Medium.ttf
│  │  │  │  ├─ OpenSans-MediumItalic.ttf
│  │  │  │  ├─ OpenSans-Regular.ttf
│  │  │  │  ├─ OpenSans-SemiBold.ttf
│  │  │  │  └─ OpenSans-SemiBoldItalic.ttf
│  │  │  └─ Poppins
│  │  │     ├─ OFL.txt
│  │  │     ├─ Poppins-Black.ttf
│  │  │     ├─ Poppins-BlackItalic.ttf
│  │  │     ├─ Poppins-Bold.ttf
│  │  │     ├─ Poppins-BoldItalic.ttf
│  │  │     ├─ Poppins-ExtraBold.ttf
│  │  │     ├─ Poppins-ExtraBoldItalic.ttf
│  │  │     ├─ Poppins-ExtraLight.ttf
│  │  │     ├─ Poppins-ExtraLightItalic.ttf
│  │  │     ├─ Poppins-Italic.ttf
│  │  │     ├─ Poppins-Light.ttf
│  │  │     ├─ Poppins-LightItalic.ttf
│  │  │     ├─ Poppins-Medium.ttf
│  │  │     ├─ Poppins-MediumItalic.ttf
│  │  │     ├─ Poppins-Regular.ttf
│  │  │     ├─ Poppins-SemiBold.ttf
│  │  │     ├─ Poppins-SemiBoldItalic.ttf
│  │  │     ├─ Poppins-Thin.ttf
│  │  │     └─ Poppins-ThinItalic.ttf
│  │  ├─ images
│  │  │  ├─ common
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ logo.png
│  │  │  │  └─ logo.svg
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ components
│  │  ├─ atoms
│  │  │  └─ index.ts
│  │  ├─ containers
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ molecules
│  │  │  ├─ ProductsCard
│  │  │  │  └─ index.tsx
│  │  │  ├─ UsersCard
│  │  │  │  └─ index.tsx
│  │  │  └─ index.ts
│  │  └─ organisms
│  │     ├─ FOProductsSection
│  │     │  └─ index.tsx
│  │     ├─ FOUserSection
│  │     │  └─ index.tsx
│  │     └─ index.ts
│  ├─ config
│  │  ├─ config.d.ts
│  │  ├─ constant.ts
│  │  ├─ index.ts
│  │  ├─ setting.ts
│  │  └─ url.ts
│  ├─ global
│  │  ├─ env.d.ts
│  │  ├─ index.d.ts
│  │  └─ navigation.d.ts
│  ├─ hooks
│  │  ├─ __tests__
│  │  │  └─ useLayout.test.ts
│  │  ├─ index.ts
│  │  ├─ useDebounce.ts
│  │  └─ useLayout.ts
│  ├─ index.tsx
│  ├─ lang
│  │  ├─ en.json
│  │  └─ id.json
│  ├─ navigation
│  │  ├─ __tests__
│  │  │  └─ navigation.test.tsx
│  │  ├─ index.tsx
│  │  └─ navigationService.ts
│  ├─ redux
│  │  ├─ __tests__
│  │  │  └─ application.test.ts
│  │  ├─ application
│  │  │  ├─ index.ts
│  │  │  └─ types.d.ts
│  │  ├─ index.ts
│  │  └─ rootReducer.ts
│  ├─ screens
│  │  ├─ Home
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ Setting
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ SignIn
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ Splash
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ __tests__
│  │  │  ├─ Setting.test.tsx
│  │  │  ├─ SignIn.test.tsx
│  │  │  └─ Splash.test.tsx
│  │  └─ index.tsx
│  ├─ services
│  │  ├─ baseQuery.ts
│  │  ├─ index.ts
│  │  ├─ products
│  │  │  └─ index.ts
│  │  └─ user
│  │     └─ index.ts
│  ├─ theme
│  │  ├─ __tests__
│  │  │  ├─ components.test.ts
│  │  │  └─ fonts.test.ts
│  │  ├─ baseStyle.ts
│  │  ├─ colors.ts
│  │  ├─ components.ts
│  │  ├─ fonts.ts
│  │  └─ index.ts
│  └─ utils
│     ├─ __tests__
│     │  ├─ generic.test.ts
│     │  └─ normalize.test.ts
│     ├─ generic.ts
│     └─ normalize.ts
├─ tsconfig.json
└─ yarn.lock

```

A brief description of the layout:

- `.github` has one github workflows directory.
- `android` is android configuration directory.
- `ios` is ios configuration directory.
- `.gitignore` varies per project, but most of it uses create react-native app base .gitignore file.

### RTK Query example fetch data

You can see the example in `src/services/products`. This is the only basic api to get data from API, you can learn more from the [official docs](https://redux-toolkit.js.org/rtk-query/overview).

```javascript
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { functionsBaseQuery } from '../baseQuery';

export interface IProductsDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IProducts {
  products: IProductsDetail[];
  total: number;
  skip: number;
  limit: number;
}

const reducerPath = 'productsAPI';

export const productsAPI = createApi({
  reducerPath: reducerPath,
  baseQuery: functionsBaseQuery(),
  tagTypes: ['Products'], //Provide tags that are available for this api
  keepUnusedDataFor: process.env.NODE_ENV !== 'test' ? 60 : 0,
  endpoints: (builder) => ({
    getProduct: builder.query<IProducts, string>({ //Rule of thumb, query is used for GET method
      query: (query) => `/products/search?q=${query}`,
      providesTags: ['Products'], //Provide the corresponding tags from tagTypes
    }),
    refetchProducts: builder.mutation<null, void>({ //Rule of thumb, mutation is used for POST, PATCH, DELETE method
      // The query is not relevant here, so a `null` returning `queryFn` is used
      queryFn: () => ({ data: null }),
      // This mutation takes advantage of tag invalidation behaviour to trigger
      // any queries that provide the 'Post' or 'User' tags to re-fetch if the queries
      // are currently subscribed to the cached data.
      // Meaning if we call this, it will call getProduct to update the cached data
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductQuery } = productsAPI;
export const productsQueryReducer = { [reducerPath]: productsAPI.reducer };
```

### :dizzy: Upload "beta" version to Firebase with Fastlane

**This is only for android**. To upload a "beta" version to firebase, you can run command

```shell
  android:beta
```

### :smiling_imp: Unit Testing

Unit testing uses jest. You can navigate to [here](./src/screens/__tests__/) to see some unit test examples

### :test_tube: How to Test Coverage

Run `yarn test:cov` and it will generate coverage report on .coverage folder

### :smiling_imp: Detox end-to-end testing

This finetiksapp is already supported with [Detox](https://wix.github.io/Detox/docs/introduction/getting-started/). You can navigate [here](./e2e/tests/) to see some examples. All available configs are on `.detoxrc.json` file.
You need to change your simulator and emulator name on the `.detoxrc.json` configuration first to be same with the one on your machine so it can work on your machine.

To build and test application run on ios

```shell
build:e2e-ios-dev-debug
test:e2e-ios-dev-debug
```

To build and test application run on android

```shell
build:e2e-android-dev-debug
test:e2e-android-dev-debug
```

### :smiling_imp: Jest example to mock service response using jest-fetch-mock

You can see the example in `src/services/__tests__/products.test.ts` based on [this article](https://medium.com/@johnmcdowell0801/testing-rtk-query-with-jest-cdfa5aaf3dc1).

```javascript
import { AllTheProviders } from '../../__mocks__/utils/wrapper';
import { renderHook } from '@testing-library/react-hooks/native';
import { useGetProductQuery } from '../../services';
import { products } from '../../__mocks__/testData';

const updateTimeout = 5000;

describe('FOProductsSection screen', () => {
  it('handles good response', async () => {
    fetchMock.mockResponse(JSON.stringify({ data: products }));
    const { result, waitForNextUpdate } = renderHook(() => useGetProductQuery(undefined), {
      wrapper: AllTheProviders,
    });
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate({ timeout: updateTimeout });

    const nextResponse = result.current;
    expect(nextResponse.data).toBeDefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });

  it('handles error response', async () => {
    fetchMock.mockReject(new Error('Internal Server Error'));
    const { result, waitForNextUpdate } = renderHook(() => useGetProductQuery(undefined), {
      wrapper: AllTheProviders,
    });
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const nextResponse = result.current;
    expect(nextResponse.data).toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isError).toBe(true);
  });
});
```

### :smiling_imp: Jest example to mock service response for component

You can see the example in `src/components/organisms/__tests__/FOProductsSection.test.tsx` based on [this article](https://bionicjulia.com/blog/implementing-rtk-query-in-react-native-app).

```javascript
import React from 'react';
import * as hooks from '../../../services/products';
import FOProductsSection from '../FOProductsSection';
import { render } from '../../../__mocks__/utils/wrapper';
import { products } from '../../../__mocks__/testData';

describe('FOProductsSection screen', () => {
  it('can shows 4 data correctly', async () => {
    jest.spyOn(hooks, 'useGetProductQuery').mockReturnValue({
      data: products,
      isError: false,
      isLoading: false,
      refetch: function (): void {
        throw new Error('Function not implemented.');
      },
    });
    const { findAllByTestId } = render(<FOProductsSection query={'Apple'} />);
    expect((await findAllByTestId('FMProductsCard')).length).toBe(4);
  });
});
```
