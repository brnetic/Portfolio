import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, background: '#1a1a1a', minHeight: '100vh' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', mb: 4 }}>
            Contact Information
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                  Phone: (213) 551-4863
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                  Email: <Link href="mailto:luka.brnetic@gmail.com" sx={{ color: 'primary.main' }}>luka.brnetic@gmail.com</Link>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                  Location: Los Angeles, California
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                    Professional Profiles
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                    LinkedIn: <Link href="https://www.linkedin.com/in/brnetic" target="_blank" sx={{ color: 'primary.main' }}>linkedin.com/in/brnetic</Link>
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                    GitHub: <Link href="https://github.com/brnetic" target="_blank" sx={{ color: 'primary.main' }}>github.com/brnetic</Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 