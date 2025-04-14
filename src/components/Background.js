import React from 'react';
import { Box } from '@mui/material';

const Background = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#1a1a1a',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, transparent 45%, rgba(144, 202, 249, 0.3) 46%, rgba(144, 202, 249, 0.3) 54%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(144, 202, 249, 0.3) 46%, rgba(144, 202, 249, 0.3) 54%, transparent 55%)
          `,
          backgroundSize: '40px 40px',
          animation: 'movePattern 20s linear infinite',
          opacity: 0.8,
        },
        '@keyframes movePattern': {
          '0%': {
            backgroundPosition: '0 0',
          },
          '100%': {
            backgroundPosition: '40px 40px',
          },
        },
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.6,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="rgba(144, 202, 249, 0.4)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </Box>
  );
};

export default Background; 