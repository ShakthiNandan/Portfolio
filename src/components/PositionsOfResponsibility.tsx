import React from 'react';
import { Box, Container, Typography, Paper, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Group as GroupIcon,
  Edit as EditIcon,
  EmojiEvents as EventsIcon,
} from '@mui/icons-material';

interface Position {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const positions: Position[] = [
  {
    title: "IEEE Student Member",
    organization: "CIT Student Chapter",
    period: "2024 - Present",
    description: "Active member of the IEEE student chapter at CIT, participating in technical activities and events.",
    icon: <GroupIcon fontSize="large" />,
  },
  {
    title: "Chief Editor",
    organization: "PIXELS Magazine",
    period: "2022 - Present",
    description: "Leading the department's magazine PIXELS as Chief Editor, overseeing content creation and publication.",
    icon: <EditIcon fontSize="large" />,
  },
  {
    title: "Event Organizer",
    organization: "GPTathon",
    period: "2024",
    description: "Successfully conducted GPTathon, a prompt engineering hackathon, during AI Awareness Month at CIT and Intellina2k25.",
    icon: <EventsIcon fontSize="large" />,
  },
];

const PositionsOfResponsibility: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
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
            Positions of Responsibility
          </Typography>

          <Stack spacing={3}>
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ color: 'primary.main' }}>
                      {position.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {position.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {position.organization}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {position.period}
                      </Typography>
                      <Typography variant="body1">
                        {position.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PositionsOfResponsibility; 