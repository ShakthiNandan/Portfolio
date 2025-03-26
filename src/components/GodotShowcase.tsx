// src/components/GodotShowcase.tsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, IconButton, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) return; // Don't set up timer if user has interacted

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % godotGames.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [userInteracted]);

  const handlePrevious = () => {
    setUserInteracted(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + godotGames.length) % godotGames.length);
  };

  const handleNext = () => {
    setUserInteracted(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % godotGames.length);
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
          Game Showcase
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
                  {godotGames[currentIndex].title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {godotGames[currentIndex].description}
                </Typography>
                <Box sx={{ height: 500, mb: 2 }}>
                  <GodotPlayer
                    htmlPath={godotGames[currentIndex].htmlPath}
                    height="100%"
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
            {godotGames.map((_, index) => (
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

export default GodotShowcase;
