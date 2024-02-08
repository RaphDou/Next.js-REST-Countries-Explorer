import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams } from '@mui/x-data-grid'; // Import de DataGrid depuis MUI X Data Grid

interface Country {
  name: {
    common: string; // Utilisez la propriété common pour afficher le nom du pays
  };
  flags: {
    svg: string; // URL du drapeau SVG
  };
}

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  // Mapping des données pour les lignes de la DataGrid
  const rows: GridRowsProp = countries.map((country, index) => ({
    id: index + 1,
    name: country.name.common,
    flag: country.flags.svg, // Nouvelle colonne pour le drapeau
  }));

  // Définition des colonnes pour la DataGrid
  const columns: GridColDef[] = [
    { field: 'flag', headerName: 'Flag', flex: 0.1, renderCell: (params: GridCellParams) => <img src={params.value as string} alt="Flag" width={30} height={20} /> },
    { field: 'name', headerName: 'Country Name', flex: 1 },
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }}> {/* Utilisation de '100vh' pour occuper toute la hauteur de l'écran */}
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default CountryList;