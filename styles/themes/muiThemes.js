import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary:{
        main:'#30B0CC',
    },
    secondary:{
        main:'#000000'
    },
    danger:{
        main:'#FF6D75'
    },
    white:{
      main:'#ffffff'
    },
    blue:{
      main:'#3A7BFF'
    }
  },
});

export default lightTheme;
