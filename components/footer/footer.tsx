import * as React from 'react';
import { AppBar, Toolbar, Link, Typography } from '@mui/material';

export default function MyFooter() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#8B0000', color: '#ffffff', top: 'auto', bottom: 0, width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="https://github.com/RaphDou" target="_blank" rel="noopener noreferrer" sx={{ color: '#ffffff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            GitHub
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}