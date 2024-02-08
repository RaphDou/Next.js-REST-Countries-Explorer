import React from 'react';

interface CountryDetailsProps {
  country: CountryDetails;
}

interface CountryDetails {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  idd?: {
    root: string;
    suffixes: string[];
  };
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: {
    [code: string]: string;
  };
  translations?: {
    [code: string]: {
      official: string;
      common: string;
    };
  };
  latlng?: [number, number];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: {
    [lang: string]: {
      f: string;
      m: string;
    };
  };
  flag?: string;
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population?: number;
  gini?: {
    [year: string]: number;
  };
  fifa?: string;
  car?: {
    signs: string[];
    side: string;
  };
  timezones?: string[];
  continents?: string[];
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  startOfWeek?: string;
  capitalInfo?: {
    latlng: [number, number];
  };
  postalCode?: {
    format: string;
    regex: string;
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common || 'Unknown'}</h2>
      <p>Official Name: {country.name.official || 'Unknown'}</p>
      <p>Native Name: {country.name.nativeName?.fra?.common || 'Unknown'}</p>
      <p>Top-Level Domain: {country.tld?.join(', ') || 'Unknown'}</p>
      <p>ISO 3166-1 alpha-2 Code: {country.cca2 || 'Unknown'}</p>
      <p>ISO 3166-1 alpha-3 Code: {country.ccn3 || 'Unknown'}</p>
      <p>ISO 3166-1 Numeric Code: {country.cca3 || 'Unknown'}</p>
      <p>CIOC Code: {country.cioc || 'Unknown'}</p>
      <p>Independent: {country.independent ? 'Yes' : 'No'}</p>
      <p>Status: {country.status || 'Unknown'}</p>
      <p>UN Member: {country.unMember ? 'Yes' : 'No'}</p>
      <p>Currencies: {country.currencies ? Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'Unknown'}</p>
      <p>IDD Root: {country.idd?.root || 'Unknown'}, Suffixes: {country.idd?.suffixes.join(', ') || 'Unknown'}</p>
      <p>Capital: {country.capital?.join(', ') || 'Unknown'}</p>
      <p>Alt Spellings: {country.altSpellings?.join(', ') || 'Unknown'}</p>
      <p>Region: {country.region || 'Unknown'}</p>
      <p>Subregion: {country.subregion || 'Unknown'}</p>
      <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'Unknown'}</p>
      {/* Translations */}
      {country.translations && (
        <div>
          <h3>Translations</h3>
          {Object.entries(country.translations).map(([code, translation]) => (
            <p key={code}>{code}: {translation.common}</p>
          ))}
        </div>
      )}
      <p>Latitude: {country.latlng?.[0] || 'Unknown'}, Longitude: {country.latlng?.[1] || 'Unknown'}</p>
      <p>Landlocked: {country.landlocked ? 'Yes' : 'No'}</p>
      <p>Borders: {country.borders?.join(', ') || 'None'}</p>
      <p>Area: {country.area || 'Unknown'} km²</p>
      {/* Demonyms */}
      {country.demonyms && (
        <div>
          <h3>Demonyms</h3>
          {Object.entries(country.demonyms).map(([lang, demonym]) => (
            <p key={lang}>{lang}: {demonym.f} (F), {demonym.m} (M)</p>
          ))}
        </div>
      )}
      <p>Flag: {country.flag || 'Unknown'}</p>
      {/* Maps */}
      {country.maps && (
        <div>
          <p>Google Maps: <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Link</a></p>
          <p>OpenStreetMaps: <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">Link</a></p>
        </div>
      )}
      <p>Population: {country.population || 'Unknown'}</p>
      {/* Gini Index */}
      {country.gini && (
        <div>
          <h3>Gini Index</h3>
          {Object.entries(country.gini).map(([year, index]) => (
            <p key={year}>{year}: {index}</p>
          ))}
        </div>
      )}
      <p>FIFA Code: {country.fifa || 'Unknown'}</p>
      {/* Car */}
      {country.car && (
        <div>
          <p>Car Signs: {country.car.signs.join(', ')}</p>
          <p>Driving Side: {country.car.side}</p>
        </div>
      )}
      <p>Timezones: {country.timezones?.join(', ') || 'Unknown'}</p>
      <p>Continents: {country.continents?.join(', ') || 'Unknown'}</p>
      {/* Coat of Arms */}
      {country.coatOfArms && (
        <div>
          <p>Coat of Arms (PNG): <img src={country.coatOfArms.png} alt="Coat of Arms" /></p>
          <p>Coat of Arms (SVG): <img src={country.coatOfArms.svg} alt="Coat of Arms" /></p>
        </div>
      )}
      <p>Start of Week: {country.startOfWeek || 'Unknown'}</p>
      {/* Capital Info */}
      {country.capitalInfo && (
        <div>
          <p>Capital Latitude: {country.capitalInfo.latlng[0]}</p>
          <p>Capital Longitude: {country.capitalInfo.latlng[1]}</p>
        </div>
      )}
      {/* Postal Code */}
      {country.postalCode && (
        <div>
          <p>Postal Code Format: {country.postalCode.format}</p>
          <p>Postal Code Regex: {country.postalCode.regex}</p>
        </div>
      )}
    </div>
  );
};


export default CountryDetails;
