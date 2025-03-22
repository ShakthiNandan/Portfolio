// src/components/GodotShowcase.tsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GodotPlayer from './GodotPlayer';

interface GodotGame {
  id: string;
  title: string;
  description: string;
  htmlPath: string;
  thumbnail?: string;
}

const godotGames: GodotGame[] = [
  {
    id: '1',
    title: 'Akka Birthday',
    description: 'A special birthday celebration game created with Godot, featuring interactive elements and celebratory gameplay.',
    htmlPath: '/data/HTML/game-wrapper.html',
    thumbnail: '/images/akka-birthday-thumb.jpg',
  },
  {
    id: '2',
    title: 'Pizza Game',
    description: 'An exciting pizza-themed game where players can create and serve delicious virtual pizzas.',
    htmlPath: '/data/HTML/pizza-wrapper.html',
  }
];

const GodotShowcase: React.FC = () => {
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
          Game Showcase
        </Typography>
        <Grid container spacing={4}>
          {godotGames.map((game) => (
            <Grid item xs={12} md={6} key={game.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {game.description}
                  </Typography>
                  <Box sx={{ height: 500, mb: 2 }}>
                    <GodotPlayer
                      htmlPath={game.htmlPath}
                      height="100%"
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GodotShowcase;
