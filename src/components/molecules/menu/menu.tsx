"use client";

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Menu: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Countries-Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
