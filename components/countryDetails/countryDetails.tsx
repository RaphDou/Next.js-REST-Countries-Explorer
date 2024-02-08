import React from 'react';

interface CountryDetailsProps {
  country: {
    name: string;
    capital?: string;
    population?: number;
    region?: string;
    subregion?: string;
    languages?: { [key: string]: string };
    currencies?: { [key: string]: { name: string; symbol: string } };
    flags?: { [key: string]: string };
    maps?: { [key: string]: string };
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>{country.name}</h2>
      <div>
        {country.flags && country.flags.svg && (
          <img src={country.flags.svg} alt="Flag" style={{ width: '100px', height: 'auto' }} />
        )}
      </div>
      <div>
        {country.capital && <p>Capital: {country.capital}</p>}
        {country.population && <p>Population: {country.population}</p>}
        {country.region && <p>Region: {country.region}</p>}
        {country.subregion && <p>Subregion: {country.subregion}</p>}
        {country.languages && (
          <p>
            Languages: {Object.values(country.languages).join(', ')}
          </p>
        )}
        {country.currencies && (
          <p>
            Currency: {Object.values(country.currencies).map((currency) => `${currency.name} (${currency.symbol})`)}
          </p>
        )}
      </div>
      <div>
        {country.maps && country.maps.googleMaps && (
          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a>
        )}
        {country.maps && country.maps.openStreetMaps && (
          <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">OpenStreetMaps</a>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
