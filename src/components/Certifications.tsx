import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  DataObject as DataIcon,
  Storage as DatabaseIcon,
  Code as PythonIcon,
  Javascript as JavascriptIcon,
} from '@mui/icons-material';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  icon: React.ReactNode;
  color: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Python for Data Science',
    issuer: 'IBM',
    icon: <DataIcon fontSize="large" />,
    color: '#0043CE', // IBM Blue
  },
  {
    id: '2',
    title: 'SQL Basic',
    issuer: 'HackerRank',
    icon: <DatabaseIcon fontSize="large" />,
    color: '#00EA64', // HackerRank Green
  },
  {
    id: '3',
    title: 'Python Basic',
    issuer: 'HackerRank',
    icon: <PythonIcon fontSize="large" />,
    color: '#00EA64', // HackerRank Green
  },
  {
    id: '4',
    title: 'JavaScript',
    issuer: 'freeCodeCamp',
    icon: <JavascriptIcon fontSize="large" />,
    color: '#0A0A23', // freeCodeCamp Dark Blue
  },
];

const Certifications: React.FC = () => {
  return (
    <Box component="section" id="certifications" sx={{ py: 6 }}>
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
          Certifications
        </Typography>
        <Grid container spacing={3}>
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={3} key={cert.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
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
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? `linear-gradient(45deg, ${cert.color}88, ${cert.color}44)`
                          : `linear-gradient(45deg, ${cert.color}, ${cert.color}88)`,
                      color: 'white',
                      boxShadow: `0 4px 20px ${cert.color}33`,
                    }}
                  >
                    {cert.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'secondary.main',
                      fontWeight: 500,
                      mt: 'auto',
                    }}
                  >
                    Issued by {cert.issuer}
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

export default Certifications;
