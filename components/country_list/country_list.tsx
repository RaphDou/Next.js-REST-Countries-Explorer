import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, GridRowParams } from '@mui/x-data-grid';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const rows: GridRowsProp = filteredCountries.map((country, index) => ({
    id: index + 1,
    name: country.name.common,
    flag: country.flags.svg,
  }));

  const columns: GridColDef[] = [
    { field: 'flag', headerName: 'Flag', flex: 0.1, renderCell: (params: GridCellParams) => <img src={params.value as string} alt="Flag" width={30} height={20} /> },
    { field: 'name', headerName: 'Country Name', flex: 1 },
  ];

  const handleRowClick = (params: GridRowParams, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const countryName = params.row.name;
    window.location.href = `/country/${encodeURIComponent(countryName as string)}`;
  };

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: '20px' }}
      />
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default CountryList;
