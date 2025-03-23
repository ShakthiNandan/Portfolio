import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Psychology, TouchApp } from '@mui/icons-material';

interface Patent {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const patents: Patent[] = [
  {
    id: '1',
    title: 'IoT-Enabled Glove For Remote Device Control',
    description: 'The present invention relates to an IoT-enabled glove, a wearable device for remote control of electronic systems using intuitive hand and finger gestures. The glove integrates a microcontroller with Bluetooth and Wi-Fi capabilities, infrared sensors, ultrasonic sensors, a gyroscope, an accelerometer, tactile push buttons, and an LCD display for real-time feedback.',
    date: '01/2025',
    icon: <TouchApp fontSize="large" />,
  },
  {
    id: '2',
    title: 'Artificial Intelligence-Based Application For Automated Chatting On Susceptible Infected Recovered For Covid 19',
    description: 'Artificial Intelligence-based application on susceptible exposed infected recovered for COVID 19 contains information understanding module and action generating module.',
    date: '05/2023',
    icon: <Psychology fontSize="large" />,
  },
];

const Patents: React.FC = () => {
  return (
    <Box component="section" id="patents" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
            background: (theme) => 
              theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff 30%, #888 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: (theme) => 
              theme.palette.mode === 'dark'
                ? '0 0 20px rgba(255,255,255,0.3)'
                : '0 0 20px rgba(33,150,243,0.3)',
          }}
        >
          Patents
        </Typography>
        <Grid container spacing={4}>
          {patents.map((patent) => (
            <Grid item xs={12} key={patent.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => `0 8px 24px ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255,255,255,0.1)' 
                          : 'rgba(0,0,0,0.1)'
                      }`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: (theme) =>
                        `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <Grid container spacing={3} alignItems="center">
                    <Grid item>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: (theme) =>
                            `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: 'white',
                          boxShadow: (theme) =>
                            `0 4px 20px ${
                              theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.1)'
                                : 'rgba(0,0,0,0.1)'
                            }`,
                        }}
                      >
                        {patent.icon}
                      </Box>
                    </Grid>
                    <Grid item xs>
                      <Box>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            mb: 1,
                          }}
                        >
                          {patent.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                          sx={{ mb: 2 }}
                        >
                          {patent.description}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'secondary.main',
                            fontWeight: 500,
                          }}
                        >
                          Patent Published Date: {patent.date}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Patents;
