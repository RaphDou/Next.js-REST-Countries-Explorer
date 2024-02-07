'use client'

import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching countries:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Countries Explorer
      </Typography>
      <TextField
        label="Search country"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
      {searchResults.map((country: any) => (
        <div key={country.name.common}>
          <Typography variant="h5">{country.name.common}</Typography>
          {/* Display more details about the country */}
        </div>
      ))}
    </Container>
  );
};

export default Page;
