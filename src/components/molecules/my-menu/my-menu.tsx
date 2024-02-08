import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import NextLink from 'next/link';

export default function MyMenu() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: red[500], border: '8px solid black' }}>
      <Toolbar>
        <NextLink href="/" passHref>
          <div>
            <Button variant="text" sx={{ color: 'black' }}>Accueil</Button>
          </div>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}
