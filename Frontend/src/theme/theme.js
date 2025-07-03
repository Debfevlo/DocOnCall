// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695f', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9a825', 
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5', 
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#388e3c', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
