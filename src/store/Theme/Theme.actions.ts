import { dark, light } from '../../styles/Themes'

export const actions = {
  DARK: 'DARK',
  LIGHT: 'LIGHT'
};

export const changeToDark = () => {
  return { type: actions.DARK, payload: dark };
};

export const changeToLight = () => {
  return { type: actions.LIGHT, payload: light };
};