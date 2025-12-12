import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { EmojiEvents as AwardIcon } from '@mui/icons-material';

interface Award {
  title: string;
  organization: string;
  prize: string;
  year: number;
}

const awards: Award[] = [
  {
    title: 'VR College Demo',
    organization: 'IEEE Project Expo',
    prize: '1st Prize',
    year: 2024
  },
  {
    title: 'English Olympiad',
    organization: 'CSC Olympiad',
    prize: 'National Level Third Prize',
    year: 2022
  },
  {
    title: 'English Olympiad',
    organization: 'CSC Olympiad',
    prize: 'National Level First Prize',
    year: 2021
  }
];

const Awards: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 4 }}>
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
          Awards & Achievements
        </Typography>

        <Grid container spacing={3}>
          {awards.map((award, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => `0 8px 24px ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255,255,255,0.1)' 
                          : 'rgba(0,0,0,0.1)'
                      }`,
                    },
                  }}
                >
                  <AwardIcon 
                    sx={{ 
                      fontSize: 48, 
                      color: 'primary.main',
                      mb: 2
                    }} 
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {award.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {award.organization}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ mb: 1 }}
                  >
                    {award.prize}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {award.year}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards; 