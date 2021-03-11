import { actions } from './Theme.actions';
import { dark } from '../../styles/Themes'

type ITheme = {
  title: string;

  colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
  }
}

type Action = {
  type: keyof typeof actions,
  payload: ITheme
};

export default function themeReducer (state: ITheme = dark, action: Action) {
  switch (action.type) {
    case actions.DARK:
      return action.payload;
    case actions.LIGHT:
      return action.payload;
    default:
      return state;
  }
}