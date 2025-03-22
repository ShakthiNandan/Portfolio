import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, Language } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.9)' 
          : theme.palette.grey[100],
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Shakthi Nandan. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://github.com/ShakthiNandan"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
              sx={{
                '&:hover': {
                  color: '#333',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/shakthinandan"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
              sx={{
                '&:hover': {
                  color: '#0077B5',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:shakthinandanp0712@gmail.com"
              color="inherit"
              size="small"
              sx={{
                '&:hover': {
                  color: '#EA4335',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="https://sssnandan.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
              sx={{
                '&:hover': {
                  color: '#2196F3',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            >
              <Language />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
