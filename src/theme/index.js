import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import color from './color';

// https://material-ui.com/customization/default-theme

const muiTheme = createMuiTheme({
  palette,
  typography,
  overrides,
});

const theme = {
  ...muiTheme,
  color,
};

export default theme;
