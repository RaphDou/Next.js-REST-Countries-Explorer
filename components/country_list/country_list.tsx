import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, GridRowParams } from '@mui/x-data-grid';
import Link from 'next/link'; // Importez Link de Next.js

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
  const rows: GridRowsProp = countries.map((country, index) => ({
    id: index + 1,
    name: country.name.common,
    flag: country.flags.svg,
  }));

  const columns: GridColDef[] = [
    { field: 'flag', headerName: 'Flag', flex: 0.1, renderCell: (params: GridCellParams) => <img src={params.value as string} alt="Flag" width={30} height={20} /> },
    { field: 'name', headerName: 'Country Name', flex: 1 },
  ];

  // Ajustez le type de la fonction handleRowClick
  const handleRowClick = (params: GridRowParams, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const countryName = params.row.name;
    // Redirection vers la page du pays en utilisant le composant Link de Next.js
    window.location.href = `/country/${encodeURIComponent(countryName as string)}`;
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // Utilisez la fonction ajustée handleRowClick
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default CountryList;
