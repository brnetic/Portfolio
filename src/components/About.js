import React from 'react';
import { Box, Typography, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiCplusplus, 
  SiDotnet,
  SiOpenjdk,
  SiJavascript, 
  SiSwift, 
  SiHtml5, 
  SiFirebase, 
  SiDocker, 
  SiAndroidstudio, 
  SiMysql, 
  SiArduino,
  SiPostman
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: SiPython, details: '(NumPy, pandas, scikit-learn, Jupyter, Matplotlib)' },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C#', icon: SiDotnet },
  { name: 'Java', icon: SiOpenjdk },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Swift', icon: SiSwift },
  { name: 'HTML/CSS', icon: SiHtml5 },
  { name: 'SwiftUI', icon: SiSwift },
  { name: 'Android Studio', icon: SiAndroidstudio },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Docker', icon: SiDocker },
  { name: 'Embedded C', icon: SiArduino }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      id="about"
      component="section"
      sx={{ 
        py: 15,
        background: '#1a1a1a',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              color: 'text.primary',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
            }}
          >
            Education
          </Typography>
          
          <Paper 
            elevation={3}
            sx={{ 
              p: 4, 
              mb: 4, 
              background: 'rgba(42, 42, 42, 0.9)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
              University of Southern California
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
              Viterbi School of Engineering
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Bachelor of Science, Computer Science
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
              Expected: May 2025
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', mt: 2 }}>
              Relevant Coursework:
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Principles of Software Development, Introduction to Artificial Intelligence, 
              Data Structures and Object-Oriented Design, Introduction to Algorithms and Theory of Computing, 
              Software Engineering, Professional C++, iOS App Development
            </Typography>
          </Paper>

          <Typography 
            variant="h4" 
            component="h3"
            gutterBottom 
            sx={{ 
              color: 'text.primary',
              mt: 8,
              mb: 4,
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Technical Skills
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              height: { xs: '500px', md: '700px' },
              width: '100%',
              mb: 4,
              overflow: 'visible',
            }}
          >
            {skills.map((skill, index) => {
              const angle = (index * (360 / skills.length)) * (Math.PI / 180);
              const radius = isMobile ? 180 : 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      background: 'rgba(42, 42, 42, 0.95)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                      width: { xs: '90px', md: '110px' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: 'rgba(42, 42, 42, 0.98)',
                        boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
                        zIndex: 1,
                      },
                    }}
                  >
                    {React.createElement(skill.icon, {
                      size: isMobile ? 24 : 32,
                      style: { color: '#90caf9' }
                    })}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        textAlign: 'center',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 