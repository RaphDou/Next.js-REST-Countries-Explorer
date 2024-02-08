import React from 'react';
import { CountryDetails } from '../countryApiResponse/countryApiRespone';
import { Typography, Divider, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

interface CountryDetailsProps {
  country: CountryDetails;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CountryDetailsComponent: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div style={{ paddingBottom: '64px' }}>
      <Typography variant="h2">{country.name.common || 'Unknown'}</Typography>
      <Divider />

      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          {/* General Information */}
          <StyledPaper>
            <Typography variant="h6">General Information</Typography>
            <Typography>A brief overview of the country's general information.</Typography>
            <Typography>Official Name: {country.name.official || 'Unknown'}</Typography>
            <Typography>Native Name: {country.name.nativeName?.fra?.common || 'Unknown'}</Typography>
            {/* Add other general information here */}
          </StyledPaper>

          {/* Maps */}
          {country.maps && (
            <StyledPaper>
              <Typography variant="h6">Maps</Typography>
              <Typography>View the country on Google Maps and OpenStreetMaps.</Typography>
              <Typography>Google Maps: <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Link</a></Typography>
              <Typography>OpenStreetMaps: <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">Link</a></Typography>
            </StyledPaper>
          )}

          {/* Gini Index */}
          {country.gini && (
            <StyledPaper>
              <Typography variant="h6">Gini Index</Typography>
              <Typography>A brief overview of the country's Gini Index.</Typography>
              {Object.entries(country.gini).map(([year, index]) => (
                <Typography key={year}>{year}: {index}</Typography>
              ))}
            </StyledPaper>
          )}

          {/* Coat of Arms */}
          {country.coatOfArms && (
            <StyledPaper>
              <Typography variant="h6">Coat of Arms</Typography>
              <Typography>View the country's coat of arms in PNG and SVG formats.</Typography>
              <Typography>Coat of Arms (PNG): <img src={country.coatOfArms.png} alt="Coat of Arms" style={{ maxWidth: '100%', height: 'auto' }} /></Typography>
              <Typography>Coat of Arms (SVG): <img src={country.coatOfArms.svg} alt="Coat of Arms" style={{ maxWidth: '100%', height: 'auto' }} /></Typography>
            </StyledPaper>
          )}
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          {/* Translations */}
          {country.translations && (
            <StyledPaper>
              <Typography variant="h6">Translations</Typography>
              <Typography>Translations of the country's name in different languages.</Typography>
              {Object.entries(country.translations).map(([code, translation]) => (
                <Typography key={code}>{code}: {translation.common}</Typography>
              ))}
            </StyledPaper>
          )}

          {/* Car */}
          {country.car && (
            <StyledPaper>
              <Typography variant="h6">Car</Typography>
              <Typography>Information about car signs and driving side.</Typography>
              <Typography>Car Signs: {country.car.signs.join(', ')}</Typography>
              <Typography>Driving Side: {country.car.side}</Typography>
            </StyledPaper>
          )}

          {/* Capital Info */}
          {country.capitalInfo && (
            <StyledPaper>
              <Typography variant="h6">Capital Info</Typography>
              <Typography>Information about the country's capital latitude and longitude.</Typography>
              <Typography>Capital Latitude: {country.capitalInfo.latlng[0]}</Typography>
              <Typography>Capital Longitude: {country.capitalInfo.latlng[1]}</Typography>
            </StyledPaper>
          )}

          {/* Postal Code */}
          {country.postalCode && (
            <StyledPaper>
              <Typography variant="h6">Postal Code</Typography>
              <Typography>Information about the country's postal code format and regex.</Typography>
              <Typography>Postal Code Format: {country.postalCode.format}</Typography>
              <Typography>Postal Code Regex: {country.postalCode.regex}</Typography>
            </StyledPaper>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryDetailsComponent;
