import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark') => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#f8f9fa',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 20px rgba(25, 118, 210, 0.3)',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 15px rgba(25, 118, 210, 0.3)',
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 12px rgba(25, 118, 210, 0.3)',
      },
      h4: {
        letterSpacing: '0.05em',
      },
      h5: {
        letterSpacing: '0.05em',
      },
      h6: {
        letterSpacing: '0.05em',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.02em',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            transition: all 0.3s ease-in-out;
          }

          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          ::-webkit-scrollbar-track {
            background: ${mode === 'dark' ? '#1e1e1e' : '#f5f5f5'};
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #1976d2, #9c27b0);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #1565c0, #7b1fa2);
          }
        `,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: -100,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'transform 0.3s ease',
              transform: 'translateX(-100%)',
            },
            '&:hover::before': {
              transform: 'translateX(200%)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
            backgroundImage: `linear-gradient(to bottom right, ${
              mode === 'dark' ? 'rgba(25, 118, 210, 0.05)' : 'rgba(25, 118, 210, 0.02)'
            }, ${
              mode === 'dark' ? 'rgba(156, 39, 176, 0.05)' : 'rgba(156, 39, 176, 0.02)'
            })`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(25, 118, 210, 0.2), transparent)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
            backdropFilter: 'blur(8px)',
            backgroundColor: mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            background: mode === 'dark' 
              ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.2), rgba(156, 39, 176, 0.2))'
              : 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(156, 39, 176, 0.1))',
            '&:hover': {
              background: mode === 'dark'
                ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.3), rgba(156, 39, 176, 0.3))'
                : 'linear-gradient(45deg, rgba(25, 118, 210, 0.2), rgba(156, 39, 176, 0.2))',
            },
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};

export default getTheme; 