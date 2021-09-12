import { createTheme } from '@material-ui/core/styles';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#636CC2',
    },
    secondary: {
      main: '#dbaa82',
    },
  },
});

const theme = createTheme({
  palette: globalTheme.palette,
  typography: {
    a: {
      fontFamily: ['Vidaloka', 'serif'].join(','),
    },
    button: {
      textTransform: 'none',
      borderRadius: '100%',
    },
  },
  overrides: {
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 'none',
        },
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          textDecoration: 'none',
          borderColor: globalTheme.palette.primary.main,
          backgroundColor: 'unset',
          color: globalTheme.palette.primary.main,
        },
        '&:focus': {
          borderRadius: '100%',
          outline: 'none',
        },
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: 'unset',
        borderRadius: '100%',
        '&:hover': {
          borderColor: globalTheme.palette.primary.main,
          backgroundColor: 'unset',
          color: globalTheme.palette.primary.main,
        },
        '&:focus': {
          borderRadius: '100%',
          outline: 'none',
          border: 'solid 1px',
          borderColor: globalTheme.palette.primary.main,
        },
      },
      root: {
        margin: '0 auto',
        display: 'flex',
        '&:hover': {
          borderColor: globalTheme.palette.primary.light,
        },
      },
    },
  },
});

export default theme;
