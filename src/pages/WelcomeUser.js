import React from 'react';
import { Typography, Box, useTheme, Avatar } from '@mui/material';
import PropTypes from 'prop-types';

export const WelcomeUser = ({ userData }) => {
  const theme = useTheme();
  
  // Handle cases where userData might be null/undefined during loading
  if (!userData) {
    return (
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h6">Loading user data...</Typography>
      </Box>
    );
  }

  // Extract user information from Google response
  const { displayName: name, email, picture } = userData;
  
  // Time-based greeting
  const currentHour = new Date().getHours();
  let greeting = 'Welcome';
  
  if (currentHour < 12) greeting = 'Good morning';
  else if (currentHour < 18) greeting = 'Good afternoon';
  else greeting = 'Good evening';

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      {/* User Avatar from Google */}
      {picture && (
        <Avatar
          src={picture}
          alt={name || 'User'}
          sx={{
            width: 64,
            height: 64,
            margin: '0 auto 16px',
            border: `3px solid ${theme.palette.primary.main}`,
          }}
        />
      )}
      
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 700,
        }}
      >
        {greeting}, {name || 'Friend'}!
      </Typography>
      
      {email && (
        <Typography variant="subtitle1" color="text.secondary">
          Signed in as: {email}
        </Typography>
      )}
    </Box>
  );
};

// PropTypes for type checking
WelcomeUser.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    // Add other Google user properties you expect
  }),
};

export default WelcomeUser;