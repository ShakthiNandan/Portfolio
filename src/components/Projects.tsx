import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Launch as LaunchIcon, NavigateNext as NextIcon, NavigateBefore as PrevIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { projects, Project } from '../data/projects';
import ModelViewer from './ModelViewer';
import GodotPlayer from './GodotPlayer';

const ITEMS_PER_PAGE = 6;

const MotionCard = motion(Card);

const categories = [
  'All',
  'Healthcare',
  'AI/ML',
  'Web Development',
  'Mobile',
  'Cybersecurity',
  'AR/VR'
] as const;

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { ref, isInView } = useScrollAnimation();

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleCategoryChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCategory: string,
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
      setCurrentPage(0);
    }
  };

  const renderDemo = (project: Project) => {
    if (!project.demoPath) return null;

    if (project.type === '3D_MODEL') {
      return (
        <ModelViewer
          modelPath={project.demoPath}
          width="100%"
          height={300}
        />
      );
    }

    if (project.type === 'GODOT_GAME') {
      return (
        <GodotPlayer
          htmlPath={project.demoPath}
          width="100%"
          height={400}
        />
      );
    }

    return null;
  };

  return (
    <Box component="section" id="projects" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ mb: 4 }}
          fontFamily="Share Tech Mono"
        >
          Projects
        </Typography>

        <Box sx={{ mb: 4, overflowX: 'auto' }}>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="project category"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              '& .MuiToggleButton-root': {
                border: 'none',
                borderRadius: '16px !important',
                px: 2,
                py: 1,
              },
            }}
          >
            {categories.map((category) => (
              <ToggleButton
                key={category}
                value={category}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  },
                }}
              >
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box ref={ref}>
          <AnimatePresence mode="wait">
            <Grid container spacing={3}>
              {visibleProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={`${currentPage}-${project.id}`}>
                  <MotionCard
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                        <Chip
                          label={project.status}
                          color={project.status === 'Completed' ? 'success' : 'warning'}
                          size="small"
                        />
                        <Chip
                          label={project.category}
                          color="primary"
                          size="small"
                        />
                      </Stack>
                      <Typography variant="h5" component="h3" gutterBottom fontFamily="Share Tech Mono">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                      {project.demoPath && (
                        <Box sx={{ mt: 2 }}>
                          {renderDemo(project)}
                        </Box>
                      )}
                    </CardContent>
                    {project.link && (
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<LaunchIcon />}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    )}
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>
        </Box>
        {totalPages > 1 && (
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              startIcon={<PrevIcon />}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            <Typography variant="body1" sx={{ alignSelf: 'center' }}>
              Page {currentPage + 1} of {totalPages}
            </Typography>
            <Button
              variant="contained"
              endIcon={<NextIcon />}
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
