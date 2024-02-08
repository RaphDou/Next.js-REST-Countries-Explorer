import React from 'react';
import { useRouter } from 'next/router';
import CountryDetails from '../../components/countryDetails/countryDetails'; // Assurez-vous d'ajuster le chemin d'alias selon votre configuration

const CountryPage = () => {
  const router = useRouter();
  const { name } = router.query;

  // Vous pouvez récupérer les détails du pays à partir d'une source de données ou en effectuant un appel API
  const countryDetails = { name: name as string }; // Utilisez le nom du pays provenant de l'URL

  return (
    <div>
      <h1>Country Details</h1>
      <CountryDetails country={countryDetails} />
    </div>
  );
};

export default CountryPage;
