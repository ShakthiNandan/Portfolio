import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Brush as DesignIcon,
  Memory as AIIcon,
  VideogameAsset as GameDevIcon,
  Security as SecurityIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';

type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
type SkillColor = 'success' | 'info' | 'primary' | 'secondary';

interface Skill {
  name: string;
  level: SkillLevel;
  icon: React.ReactNode;
  category: string;
  experience: string;
}

const getSkillColor = (level: SkillLevel): SkillColor => {
  switch (level) {
    case 'Expert':
      return 'success';
    case 'Advanced':
      return 'info';
    case 'Intermediate':
      return 'primary';
    case 'Beginner':
      return 'secondary';
  }
};

const getSkillStars = (level: SkillLevel) => {
  switch (level) {
    case 'Expert':
      return [<StarIcon key="1" />, <StarIcon key="2" />, <StarIcon key="3" />, <StarIcon key="4" />, <StarIcon key="5" />];
    case 'Advanced':
      return [<StarIcon key="1" />, <StarIcon key="2" />, <StarIcon key="3" />, <StarIcon key="4" />, <StarBorderIcon key="5" />];
    case 'Intermediate':
      return [<StarIcon key="1" />, <StarIcon key="2" />, <StarIcon key="3" />, <StarBorderIcon key="4" />, <StarBorderIcon key="5" />];
    case 'Beginner':
      return [<StarIcon key="1" />, <StarIcon key="2" />, <StarBorderIcon key="3" />, <StarBorderIcon key="4" />, <StarBorderIcon key="5" />];
  }
};

const skillsList: Skill[] = [
  { 
    name: 'Python',
    level: 'Expert',
    icon: <CodeIcon />,
    category: 'Programming',
    experience: '3+ years'
  },
  { 
    name: 'Flutter',
    level: 'Advanced',
    icon: <CodeIcon />,
    category: 'Mobile Development',
    experience: '2+ years'
  },
  { 
    name: 'SQL',
    level: 'Advanced',
    icon: <DatabaseIcon />,
    category: 'Database',
    experience: '2+ years'
  },
  { 
    name: 'UI/UX Design',
    level: 'Intermediate',
    icon: <DesignIcon />,
    category: 'Design',
    experience: '1+ year'
  },
  { 
    name: 'Machine Learning',
    level: 'Advanced',
    icon: <AIIcon />,
    category: 'AI',
    experience: '2+ years'
  },
  { 
    name: 'Game Development',
    level: 'Intermediate',
    icon: <GameDevIcon />,
    category: 'Game Dev',
    experience: '1+ year'
  },
  { 
    name: 'Cybersecurity',
    level: 'Advanced',
    icon: <SecurityIcon />,
    category: 'Security',
    experience: '2+ years'
  },
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
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => `0 8px 24px ${
                    theme.palette.mode === 'dark' 
                      ? 'rgba(255,255,255,0.1)' 
                      : 'rgba(0,0,0,0.1)'
                  }`,
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
                      {skill.category} • {skill.experience}
                    </Typography>
                  </Box>
                </Box>
                <Stack spacing={1}>
                  <Chip
                    label={skill.level}
                    color={getSkillColor(skill.level)}
                    size="small"
                    sx={{ fontWeight: 500, alignSelf: 'flex-start' }}
                  />
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      gap: 0.5,
                      color: (theme) => 
                        theme.palette.mode === 'dark' 
                          ? theme.palette[getSkillColor(skill.level)].light
                          : theme.palette[getSkillColor(skill.level)].main
                    }}
                  >
                    {getSkillStars(skill.level)}
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Skills;
