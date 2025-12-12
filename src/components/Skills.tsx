import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Web as WebIcon,
  Memory as AIIcon,
  VideogameAsset as GameDevIcon,
  Cloud as CloudIcon,
  BugReport as BugReportIcon,
  BarChart as ChartIcon,
  Terminal as TerminalIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web Hosting",
    skills: ["Render", "Python Anywhere", "Streamlit", "Vercel"],
    icon: <CloudIcon fontSize="large" />
  },
  {
    title: "DBMS",
    skills: ["Sqlite3", "Mysql", "MongoDB", "Postgres - Supabase"],
    icon: <DatabaseIcon fontSize="large" />
  },
  {
    title: "App Testing",
    skills: ["Selenium", "Python Playwright", "Jenkins"],
    icon: <BugReportIcon fontSize="large" />
  },
  {
    title: "Web Development",
    skills: ["HTML/CSS/JS", "Flask", "ReactJS - NodeJS", "Flutter"],
    icon: <WebIcon fontSize="large" />
  },
  {
    title: "Artificial Intelligence",
    skills: ["MCP Servers", "LangChain", "OpenCV", "Ollama - OpenWebUI"],
    icon: <AIIcon fontSize="large" />
  },
  {
    title: "Game Development",
    skills: ["Godot", "Blender 3D Modelling", "Unity3D"],
    icon: <GameDevIcon fontSize="large" />
  },
  {
    title: "Visualizations",
    skills: ["Python Matplotlib", "PowerBI", "Tableau", "Blender 3D"],
    icon: <ChartIcon fontSize="large" />
  },
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C", "Java"],
    icon: <TerminalIcon fontSize="large" />
  }
];

const Skills: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="skills" sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 700,
              fontFamily: 'Roboto',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff 30%, #888 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: theme.palette.mode === 'dark'
                ? '0 0 20px rgba(255,255,255,0.3)'
                : '0 0 20px rgba(33,150,243,0.3)',
            }}
          >
            Skills
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 24px rgba(255,255,255,0.1)'
                        : '0 8px 24px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      mb: 1,
                      boxShadow: theme.shadows[4],
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography variant="h6" align="center" gutterBottom fontWeight="bold">
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.text.primary,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                            borderColor: theme.palette.primary.light,
                          },
                        }}
                      />
                    ))}
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

export default Skills;
