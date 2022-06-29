/**
 * IMPORTS
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ApplicationState = {
  theme: string;
  font: string;
  force_dark: boolean;
  language: string;
  intro: boolean;
};

/**
 * SLICE USER
 */
const initialState: ApplicationState = {
  theme: 'blue',
  font: 'Poppins',
  force_dark: false,
  language: 'id',
  intro: true,
};

const reducerName = 'application';
const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    // SET INTRO
    setIntro(state: ApplicationState, action: PayloadAction<boolean>) {
      state.intro = action?.payload;
    },

    // ON CHANGE THEME
    onChangeTheme(state: ApplicationState, action: PayloadAction<string>) {
      state.theme = action?.payload;
    },

    // ON FORCE THEME
    onForceTheme(state: ApplicationState, action: PayloadAction<boolean>) {
      state.force_dark = action?.payload;
    },

    // ON CHANGE FONT
    onChangeFont(state: ApplicationState, action: PayloadAction<string>) {
      state.font = action?.payload;
    },

    // ON CHANGE LANGUAGE
    onChangeLanguage(state: ApplicationState, action: PayloadAction<string>) {
      state.language = action?.payload;
    },
  },
});

// Reducer
export const applicationReducer = { [reducerName]: slice.reducer };

// Actions
export const { setIntro, onChangeTheme, onForceTheme, onChangeFont, onChangeLanguage } =
  slice.actions;
// ----------------------------------------------------------------------
