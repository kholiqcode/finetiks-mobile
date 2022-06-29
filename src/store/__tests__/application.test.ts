import {
  applicationReducer,
  onChangeFont,
  onChangeLanguage,
  onChangeTheme,
  onForceTheme,
  setIntro,
} from '../application';

const initialState = {
  theme: 'blue',
  font: 'Poppins',
  force_dark: false,
  language: 'id',
  intro: true,
};

describe('Application_Reducer', () => {
  test('should intro state value being true', () => {
    expect(applicationReducer.application(initialState, setIntro(true))).toEqual({
      theme: 'blue',
      font: 'Poppins',
      force_dark: false,
      language: 'id',
      intro: true,
    });
  });

  test('should intro state value being false', () => {
    expect(applicationReducer.application(initialState, setIntro(false))).toEqual({
      theme: 'blue',
      font: 'Poppins',
      force_dark: false,
      language: 'id',
      intro: false,
    });
  });

  test('should change font value', () => {
    expect(applicationReducer.application(initialState, onChangeFont('Inter'))).toEqual({
      theme: 'blue',
      font: 'Inter',
      force_dark: false,
      language: 'id',
      intro: true,
    });
  });

  test('should change theme value', () => {
    expect(applicationReducer.application(initialState, onChangeTheme('red'))).toEqual({
      theme: 'red',
      font: 'Poppins',
      force_dark: false,
      language: 'id',
      intro: true,
    });
  });

  test('should change theme value', () => {
    expect(applicationReducer.application(initialState, onForceTheme(true))).toEqual({
      theme: 'blue',
      font: 'Poppins',
      force_dark: true,
      language: 'id',
      intro: true,
    });
  });

  test('should change language value', () => {
    expect(applicationReducer.application(initialState, onChangeLanguage('en'))).toEqual({
      theme: 'blue',
      font: 'Poppins',
      force_dark: false,
      language: 'en',
      intro: true,
    });
  });
});
