import React, { useState } from 'react';
import { IconButton, Tooltip, useTheme, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TrafficStats from './TrafficStats';
import { ENABLE_ANALYTICS } from '../config';

const TrafficStatsToggle: React.FC = () => {
  const [showStats, setShowStats] = useState(false);
  const theme = useTheme();

  if (!ENABLE_ANALYTICS) {
    return null;
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Tooltip title={showStats ? 'Hide traffic stats' : 'Show traffic stats'}>
        <IconButton
          onClick={() => setShowStats(!showStats)}
          color={showStats ? 'primary' : 'default'}
          sx={{
            color: showStats 
              ? theme.palette.primary.main 
              : theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
          aria-label={showStats ? 'Hide traffic stats' : 'Show traffic stats'}
        >
          <PeopleIcon />
        </IconButton>
      </Tooltip>
      
      {showStats && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 1100,
            mt: 1,
          }}
        >
          <TrafficStats 
            onClose={() => setShowStats(false)}
            showCloseButton
          />
        </Box>
      )}
    </Box>
  );
};

export default TrafficStatsToggle;
