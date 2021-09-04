import { Theme } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

export const lightTheme: Theme = createTheme({
  palette: {
    text: {
      primary: 'rgba(0, 0, 0, 0.8)',
    },
    background: {
      paper: 'rgba(250, 250, 250, 1)',
      default: 'rgba(250, 250, 250, 1)',
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    text: {
      primary: 'rgba(153, 0, 102, 1)',
    },
    background: {
      paper: 'rgba(, 0, 0, 1)',
      default: 'rgba(0, 0, 0, 1)',
    },
  },
});
