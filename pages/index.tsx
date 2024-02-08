import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryList from '../components/country_list/country_list'; // Assurez-vous d'ajuster le chemin d'alias selon votre configuration

const HomePage = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des pays</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default HomePage;