/** @format */

import { createTheme } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
