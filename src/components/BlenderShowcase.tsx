// src/components/BlenderShowcase.tsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Theme, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ModelViewer from './ModelViewer';
import LazyModelViewer from './LazyModelViewer';

interface BlenderModel {
  id: string;
  title: string;
  description: string;
  modelPath: string;
  thumbnail?: string;
}

const blenderModels: BlenderModel[] = [
  {
    id: '1',
    title: 'Dragon Head',
    description: 'A fearsome dragon head inspired by the boss from Magic Rampage. This detailed model captures the menacing essence of the game\'s antagonist.',
    modelPath: '/data/models/Dragon.glb',
    thumbnail: '/images/previews/dragon.jpg',
  },
  {
    id: '2',
    title: 'Assault Rifle',
    description: 'A meticulously crafted assault rifle model showcasing intricate details and realistic proportions.',
    modelPath: '/data/models/Assault.glb',
    thumbnail: '/images/previews/assault.jpg',
  },
  {
    id: '3',
    title: 'Chess Board',
    description: 'A classic chess board recreation in 3D, featuring detailed pieces and texturing.',
    modelPath: '/data/models/Chess.glb',
    thumbnail: '/images/previews/chess.jpg',
  },
  {
    id: '4',
    title: 'Clash of Clans Base',
    description: 'A detailed recreation of a Clash of Clans base, showcasing the iconic game\'s architectural style.',
    modelPath: '/data/models/coc.glb',
    thumbnail: '/images/previews/coc.jpg',
  },
  {
    id: '5',
    title: 'Temple Exterior',
    description: 'An architectural visualization of a temple exterior, demonstrating structural detail and cultural elements.',
    modelPath: '/data/models/exterior.glb',
    thumbnail: '/images/previews/temple.jpg',
  },
  {
    id: '6',
    title: 'School Building',
    description: 'A 3D representation of my school building, capturing its architectural essence and memorable features.',
    modelPath: '/data/models/Smbm render.glb',
    thumbnail: '/images/previews/school.jpg',
  },
  {
    id: '7',
    title: 'Stealth Visor',
    description: 'A recreation of the iconic helmet worn by a Shadow Fight 3 boss, featuring intricate details and menacing design.',
    modelPath: '/data/models/Stealth Visor.glb',
    thumbnail: '/images/previews/visor.jpg',
  }
];

const BlenderShowcase: React.FC = () => {
  const theme = useTheme();
  
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
          3D Models Showcase
        </Typography>
        <Grid container spacing={4}>
          {blenderModels.map((model) => (
            <Grid item xs={12} md={6} key={model.id}>
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
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {model.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {model.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      height: 400, 
                      mb: 2,
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(0,0,0,0.02)',
                    }}
                  >
                    <LazyModelViewer
                      previewImageUrl={model.thumbnail || '/images/previews/default-model.jpg'}
                      modelUrl={model.modelPath}
                      title={model.title}
                      description={model.description}
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

export default BlenderShowcase;
