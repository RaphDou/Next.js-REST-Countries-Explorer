import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export default function MyFooter() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', border: '8px solid black' }}>
      <Toolbar>
        {/* Contenu de votre pied de page ici */}
      </Toolbar>
    </AppBar>
  );
}
