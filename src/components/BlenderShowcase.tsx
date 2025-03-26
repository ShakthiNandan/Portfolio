// src/components/BlenderShowcase.tsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, IconButton, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) return; // Don't set up timer if user has interacted

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blenderModels.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [userInteracted]);

  const handlePrevious = () => {
    setUserInteracted(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blenderModels.length) % blenderModels.length);
  };

  const handleNext = () => {
    setUserInteracted(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blenderModels.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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
        
        <Box sx={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{ position: 'absolute', width: '100%' }}
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
                  {blenderModels[currentIndex].title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ mb: 3 }}
                >
                  {blenderModels[currentIndex].description}
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
                    previewImageUrl={blenderModels[currentIndex].thumbnail || '/images/previews/default-model.jpg'}
                    modelUrl={blenderModels[currentIndex].modelPath}
                    title={blenderModels[currentIndex].title}
                    description={blenderModels[currentIndex].description}
                  />
                </Box>
              </Paper>
            </motion.div>
          </AnimatePresence>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {blenderModels.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? 'primary.main' : 'rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: index === currentIndex ? 'primary.main' : 'rgba(0, 0, 0, 0.5)',
                  },
                }}
                onClick={() => {
                  setUserInteracted(true);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default BlenderShowcase;
