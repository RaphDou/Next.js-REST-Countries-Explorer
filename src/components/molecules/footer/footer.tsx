"use client";

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;