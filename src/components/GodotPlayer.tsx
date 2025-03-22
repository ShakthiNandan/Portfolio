import React, { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography, Button, IconButton } from '@mui/material';
import { PlayArrow, Fullscreen, FullscreenExit, Close } from '@mui/icons-material';

interface GodotPlayerProps {
  htmlPath: string;
  width?: string | number;
  height?: string | number;
  thumbnail?: string;
}

const GodotPlayer: React.FC<GodotPlayerProps> = ({
  htmlPath,
  width = '100%',
  height = '600px',
  thumbnail,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleIframeLoad);
      }
    };
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsPlaying(false);
    setIsLoading(true);
    // Clear the iframe src to fully unload the game
    if (iframeRef.current) {
      iframeRef.current.src = '';
      // Reset the src after a short delay to ensure proper cleanup
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = htmlPath;
        }
      }, 100);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Error with fullscreen:', err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper',
      }}
    >
      {!isPlaying ? (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            gap: 2,
            backgroundImage: thumbnail ? `url(${thumbnail})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlayArrow />}
            onClick={handlePlay}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              borderRadius: 8,
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(25, 118, 210, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 1)',
                transform: 'scale(1.05)',
              },
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            Play Game
          </Button>
        </Box>
      ) : (
        <>
          <iframe
            ref={iframeRef}
            src={htmlPath}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Godot Game"
            allow="autoplay; fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              display: 'flex',
              gap: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: '4px',
              borderRadius: '8px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <IconButton
              onClick={toggleFullscreen}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>
            <IconButton
              onClick={handleExit}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </>
      )}
      {isPlaying && isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            gap: 2,
          }}
        >
          <CircularProgress color="primary" />
          <Typography variant="body1" color="white">
            Loading Game...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GodotPlayer; 