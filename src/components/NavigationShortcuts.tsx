import React from 'react';
import { Box, Fab, Zoom, useTheme, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

const NavigationShortcuts: React.FC = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(3),
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Zoom in={trigger}>
        <Fab
          size="small"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: 'white',
            '&:hover': {
              background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
      <Zoom in={trigger}>
        <Fab
          size="small"
          aria-label="scroll to bottom"
          onClick={scrollToBottom}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            color: 'white',
            '&:hover': {
              background: `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
            },
          }}
        >
          <KeyboardArrowDown />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default NavigationShortcuts; 