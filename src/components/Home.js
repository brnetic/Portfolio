import React from 'react';
import { Box, Typography, Button, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#1a1a1a',
        pt: { xs: 8, md: 0 },
        mt: -8,
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              color: 'text.primary',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
            }}
          >
            Hi, I'm Luka Brnetic
          </Typography>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              color: 'primary.main',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Computer Science Student at USC
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '600px',
            }}
          >
            Los Angeles | (213) 551-4863 | luka.brnetic@gmail.com
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="https://www.linkedin.com/in/brnetic"
              target="_blank"
              sx={{
                mr: 2,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(144, 202, 249, 0.1)',
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="https://github.com/brnetic"
              target="_blank"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(144, 202, 249, 0.1)',
                },
              }}
            >
              GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 