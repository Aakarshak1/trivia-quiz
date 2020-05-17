import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#c7e5b4' },
  secondary: { main: '#393E46', contrastText: '#ffffff' },
  palette: {
    background: {
      //   default: '#c7e5b4',
      default: '#222831',
    },
    text: {
      primary: '#ffffff',
    },
  },
};

export default createMuiTheme(palette);
