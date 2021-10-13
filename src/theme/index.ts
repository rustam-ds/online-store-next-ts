import * as styledComponents from 'styled-components';
import { vars } from 'src/theme/vars';

export type ThemeInterface = typeof vars;

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

const { uiPoint } = vars;

export { css, createGlobalStyle, keyframes, ThemeProvider, vars, uiPoint };
export default styled;
