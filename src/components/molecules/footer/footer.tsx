"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="subtitle1" component="div">
              <Link href="https://github.com/RaphDou" target="_blank" rel="noopener noreferrer" color="inherit">Github</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="caption" color="inherit">
              Last updated 02-01-2024
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;