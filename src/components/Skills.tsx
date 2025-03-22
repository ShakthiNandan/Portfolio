import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Brush as DesignIcon,
  Memory as AIIcon,
  VideogameAsset as GameDevIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  category: string;
}

const skillsList: Skill[] = [
  { name: 'Python', proficiency: 90, icon: <CodeIcon />, category: 'Programming' },
  { name: 'Flutter', proficiency: 85, icon: <CodeIcon />, category: 'Mobile Development' },
  { name: 'SQL', proficiency: 80, icon: <DatabaseIcon />, category: 'Database' },
  { name: 'UI/UX Design', proficiency: 75, icon: <DesignIcon />, category: 'Design' },
  { name: 'Machine Learning', proficiency: 85, icon: <AIIcon />, category: 'AI' },
  { name: 'Game Development', proficiency: 70, icon: <GameDevIcon />, category: 'Game Dev' },
  { name: 'Cybersecurity', proficiency: 80, icon: <SecurityIcon />, category: 'Security' },
];

const Skills: React.FC = () => (
  <Box component="section" id="skills" sx={{ py: 6, backgroundColor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skillsList.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
              elevation={2}
            >
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.category}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Proficiency
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.proficiency}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Skills;
