import { red, grey } from '@material-ui/core/colors';
import color from '@theme/color';

export default {
  primary: {
    light: '#7986cb',
    main: '#3f51b5',
    dark: '#303f9f',
    contrastText: color.white,
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: color.white,
  },
  error: {
    light: red.A100,
    main: red[500],
    dark: red[700],
  },
  background: {
    paper: color.white,
    default: grey[50],
  },
};
