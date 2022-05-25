import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3.4rem',
      marginBottom: '2rem',
    },
    h2: {
      fontSize: '2.2rem',
    },
    h3: {
      fontSize: '1.3rem',
      marginBottom: '1.1rem'
    },
  },
});

export default theme;
