import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const ProjectHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Project: Explore Countries with React and Material-UI</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ProjectHeader;
