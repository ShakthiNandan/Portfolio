import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
  Container,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Send as SendIcon, Email as EmailIcon } from '@mui/icons-material';

const MotionPaper = motion(Paper);

interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailSender: React.FC = () => {
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.subject.trim()) return 'Please enter a subject';
    if (!formData.message.trim()) return 'Please enter your message';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setSnackbar({
        open: true,
        message: error,
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Create mailto link with pre-filled data
      const mailtoLink = `mailto:shakthinandanp0712@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSnackbar({
        open: true,
        message: 'Opening email client...',
        severity: 'success',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to open email client. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '2rem', sm: '3rem' },
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: 'uppercase',
              textAlign: { xs: 'center', sm: 'left' },
              color: 'text.primary',
              textShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 0 20px rgba(255,255,255,0.3)'
                  : '0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            Chat with Me
          </Typography>
        </motion.div>

        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
            component="a"
            href="mailto:shakthinandanp0712@gmail.com"
            startIcon={<EmailIcon sx={{ color: 'inherit' }} />}
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderWidth: 2,
              color: 'text.primary',
              borderColor: 'primary.main',
              '&:hover': {
                borderWidth: 2,
                borderColor: 'primary.dark',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(0,0,0,0.05)',
              },
            }}
          >
            Send Direct Email
          </Button>
        </Box>

        <Divider sx={{ my: 4 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              px: 2,
              backgroundColor: 'background.paper',
            }}
          >
            Or use the form below
          </Typography>
        </Divider>

        <MotionPaper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'primary.main',
                    },
                  },
                }}
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'primary.main',
                    },
                  },
                }}
              />

              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'primary.main',
                    },
                  },
                }}
              />

              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'primary.main',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ?
                  <CircularProgress size={20} sx={{ color: 'inherit' }} /> :
                  <SendIcon sx={{ color: 'inherit' }} />
                }
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'background.paper',
                  background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
                  boxShadow: (theme) =>
                    `0 3px 5px 2px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                    boxShadow: (theme) =>
                      `0 6px 10px 4px ${theme.palette.primary.main}40`,
                  },
                  '&.Mui-disabled': {
                    color: 'text.disabled',
                  },
                }}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </Button>
            </Box>
          </form>
        </MotionPaper>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{
              width: '100%',
              '& .MuiAlert-icon': {
                color: 'inherit',
              },
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default EmailSender; 