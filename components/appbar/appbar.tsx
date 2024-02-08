import * as React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function MyMenu() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#8B0000' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Countries Explorer
        </Typography>
        <NextLink href="/" passHref>
          <Button variant="text" sx={{ color: '#ffffff' }}>Home</Button>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}