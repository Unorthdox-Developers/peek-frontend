import { Theme } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

export const lightTheme: Theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
      },
    },
  },
  palette: {
    text: {
      primary: 'black',
    },
    background: {
      paper: '#F2F2F2',
      default: '#FAFAFA',
    },
  },
});

export const darkTheme: Theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
      },
    },
  },
  palette: {
    text: {
      primary: 'white',
    },
    background: {
      paper: '#002626',
      default: '#001A1A',
    },
  },
});
