import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReactPlayer from 'react-player';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShakespereanText from './ShakespereanText';

const projects = [
  {
    title: 'Pacman AI',
    description: 'Developed a Deep Q-Network (DQN) agent to play Pacman, achieving a score of 4000 after 10 hours of training. Used PyTorch to construct a convolutional neural network (CNN) for processing game state from an RGB array, implemented a custom replay buffer, improving the agent\'s learning efficiency.',
    technologies: ['PyTorch', 'Deep Learning', 'CNN', 'DQN'],
    date: 'Spring 2025',
    video: '/videos/Pacman_demo.mp4',
    hasDemo: true,
    demoType: 'video',
    githubLink: 'https://github.com/brnetic/DQN'
  },
  {
    title: 'ShakespereanAI',
    description: 'Developed a character-level transformer model trained on Shakespeare\'s works to generate text in his distinctive style. The model captures the essence of Elizabethan English, producing coherent and stylistically consistent text sequences.',
    technologies: ['PyTorch', 'Transformers', 'NLP', 'Deep Learning'],
    date: 'Spring 2025',
    hasDemo: true,
    demoType: 'text',
    githubLink: 'https://github.com/brnetic/Shakespearean'
  },
  {
    title: 'JobView',
    description: 'Programmed an app for identifying job application updates, filtering 100+ emails, processing them in JSON format with 90% accuracy. Deployed the backend to Firebase Cloud Functions utilizing imgalib and OpenAI\'s API (GPT-4o model) for email processing and Firestore for storage. Created an iOS app in SwiftUI to retrieve preprocessed data from Firestore, and display job-related data.',
    technologies: ['Firebase', 'OpenAI API', 'SwiftUI', 'Cloud Functions'],
    date: 'Spring 2025',
    githubLink: 'https://github.com/brnetic/JobView'
  },
  {
    title: 'Study Buddy',
    description: 'Cooperated with 3 students to create Study Buddy in Java using Android Studio, an Android app for students to form study groups and find study partners. Initialized Firebase services, including Firestore for storing study groups and chat messages, Authentication for authentication, and File Storage for uploading study materials.',
    technologies: ['Java', 'Android Studio', 'Firebase'],
    date: 'Fall 2024',
    githubLink: 'https://github.com/brnetic/StudyBuddy'
  },
  {
    title: 'StudyConnect',
    description: 'Worked with a team of 6 students to develop a website for forming study groups using Java and MySQL for backend, and HTML/CSS and JavaScript for frontend. Introduced RESTful APIs manually using Java for retrieving information such as user\'s study groups, user\'s data, etc. Established an online server on MySQL, making the data accessible for everyone using the app.',
    technologies: ['Java', 'MySQL', 'HTML/CSS', 'JavaScript'],
    date: 'Fall 2023',
    githubLink: 'https://github.com/JenaBhandari/studyconnect'
  }
];

const TextGenerationDemo = ({ onClose }) => {
  return (
    <Box sx={{ p: 3, bgcolor: '#1e1e1e', borderRadius: 1, mt: 2 }}>
      <ShakespereanText />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.23)',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            }
          }}
        >
          Close Demo
        </Button>
      </Box>
    </Box>
  );
};

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showTextDemo, setShowTextDemo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleDemoClick = (project) => {
    if (project.demoType === 'video') {
      setCurrentVideo(project);
      setShowVideo(true);
    } else if (project.demoType === 'text') {
      setShowTextDemo(true);
    }
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setCurrentVideo(null);
  };

  return (
    <Box id="projects" sx={{ py: 8, background: '#1a1a1a', minHeight: '100vh' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', mb: 4 }}>
            Academic Projects
          </Typography>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card sx={{ background: '#2a2a2a' }}>
                    {showVideo && currentVideo === project && project.demoType === 'video' && (
                      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2, bgcolor: 'black' }}>
                        <Button
                          onClick={handleCloseVideo}
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }
                          }}
                        >
                          Close
                        </Button>
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}>
                          <ReactPlayer
                            url={project.video}
                            width="100%"
                            height="100%"
                            controls={true}
                            playing={true}
                            config={{
                              file: {
                                attributes: {
                                  controlsList: 'nodownload'
                                }
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    )}
                    {index === 1 && showTextDemo && project.demoType === 'text' && (
                      <TextGenerationDemo onClose={() => setShowTextDemo(false)} />
                    )}
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h5" component="h2" sx={{ color: 'white' }}>
                          {project.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
                          {project.date}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ mt: 2 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Typography
                              key={techIndex}
                              variant="caption"
                              sx={{
                                mr: 1,
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                background: 'rgba(144, 202, 249, 0.1)',
                                color: 'primary.main',
                                display: 'inline-block',
                                mb: 1
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                          {project.githubLink && (
                            <Button
                              variant="outlined"
                              size="small"
                              href={project.githubLink}
                              target="_blank"
                              sx={{
                                ml: 1,
                                color: 'primary.main',
                                borderColor: 'primary.main',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                  backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                }
                              }}
                            >
                              GitHub
                            </Button>
                          )}
                        </Box>
                        {project.hasDemo && !((index === 0 && showVideo) || (index === 1 && showTextDemo)) && (
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={project.demoType === 'video' ? <PlayArrowIcon /> : <AutorenewIcon />}
                            onClick={() => handleDemoClick(project)}
                            sx={{
                              ml: 2,
                              backgroundColor: 'rgba(144, 202, 249, 0.2)',
                              '&:hover': {
                                backgroundColor: 'rgba(144, 202, 249, 0.3)',
                              }
                            }}
                          >
                            {project.demoType === 'video' ? 'Watch Demo' : 'Try Demo'}
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 