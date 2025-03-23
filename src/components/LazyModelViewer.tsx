import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme, Fade, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  ThreeDRotation as ThreeDIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon,
  Mouse as MouseIcon,
  TouchApp as TouchIcon,
} from '@mui/icons-material';
import ModelViewer from './ModelViewer';

interface LazyModelViewerProps {
  previewImageUrl: string;
  modelUrl: string;
  title: string;
  description?: string;
}

const LazyModelViewer: React.FC<LazyModelViewerProps> = ({
  previewImageUrl,
  modelUrl,
  title,
  description,
}) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const loadModel = () => {
    setIsModelLoaded(true);
    setShowInstructions(true);
    // Hide instructions after 5 seconds
    setTimeout(() => setShowInstructions(false), 5000);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && isModelLoaded) {
            setIsModelLoaded(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isModelLoaded]);

  return (
    <Box 
      ref={containerRef}
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%',
        ...(isFullscreen && {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: theme.palette.background.paper,
        })
      }}
    >
      {!isModelLoaded ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${previewImageUrl}) center/cover no-repeat`,
            borderRadius: '8px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: '8px',
            }}
          />
          <Button
            variant="contained"
            startIcon={<ThreeDIcon />}
            onClick={loadModel}
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: 'white',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              },
            }}
          >
            Load 3D Model
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <ModelViewer
            modelPath={modelUrl}
            height="100%"
            backgroundColor={theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              gap: 1,
              zIndex: 2,
            }}
          >
            <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
              <IconButton
                onClick={toggleFullscreen}
                sx={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  },
                }}
              >
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </IconButton>
            </Tooltip>
          </Box>
          <Fade in={showInstructions}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                zIndex: 2,
              }}
            >
              <MouseIcon fontSize="small" />
              <Typography variant="body2">
                Left Click + Drag to Rotate | Right Click + Drag to Pan | Scroll to Zoom
              </Typography>
              <TouchIcon fontSize="small" />
              <Typography variant="body2">
                One Finger to Rotate | Two Fingers to Pan & Zoom
              </Typography>
            </Box>
          </Fade>
        </motion.div>
      )}
    </Box>
  );
};

export default LazyModelViewer; 