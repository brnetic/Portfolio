import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const ShakespereanText = () => {
  const shakespeareanText = `For I have a deliver to him and to be amended
In part that I knew at loath.

BHORSON:
Sir, farewell.

GREY:
My lord?

POMPEY:
What! what else?

HASTINGS:
Many is mine honest news, but I saw not two;
And I can speak, but say you that I live to speak.

PETRUCHIO:
I'll go along with 't. What, is I do?

PETRUCHIO:
Within my tent?

HORTENSIO:
'Faith,'tis time; and I will not do lose thee.

GREMIO:
Good king, 'tis good fairer than he is for hell.

GREMIO:
Good madam, be very knock of rid of poor love.

GREMIO:
Sir, she is good father, which he is full of woe
To see him the merry sweet desire of love,
I have a hot for love in my life:
But look to your love, she that were as free
As I will do consul, a loyal part
To fear so your disgrace. What's your will?

Provost:
How now, Claudio, what's your will?

CLAUDIO:
No more dishonour aease.

ISABELLA:
Go to, go to;
To not fair honourly and provided.

CLAUDIO:
No, rather: it is approach and recreant
In such a leg, sir, a villain.

ISABELLA:
O a woma`;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = shakespeareanText.split(/\s+/);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex(prev => {
        if (prev >= words.length - 1) {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentWordIndex(0);
            setIsVisible(true);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [words.length]);

  const visibleWords = () => {
    const start = Math.max(0, currentWordIndex - 79);
    const end = currentWordIndex + 1;
    const visibleWords = words.slice(start, end);
    
    return visibleWords.map((word, index) => (
      <span
        key={index}
        style={{
          opacity: index === visibleWords.length - 1 ? 1 : 0.7,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <Box sx={{ 
      p: 3, 
      maxWidth: '800px', 
      margin: '0 auto',
      background: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 2,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
    }}>
      <Typography 
        variant="body1" 
        sx={{ 
          whiteSpace: 'pre-wrap',
          lineHeight: 1.8,
          fontFamily: 'monospace',
          color: '#90caf9',
        }}
      >
        {visibleWords()}
      </Typography>
    </Box>
  );
};

export default ShakespereanText; 