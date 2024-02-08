import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Country {
  name: string;
  flags: {
    svg: string;
  };
}

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>('https://restcountries.com/v3.1/all');
        const countriesData = response.data.map((country: any) => ({
          name: country.name.common,
          flags: {
            svg: country.flags.svg
          }
        }));
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []); // Utilisation d'un tableau vide pour exécuter useEffect une seule fois lors du montage

  return (
    <div>
      <h1>Liste des pays</h1>
      <ul>
        {countries.map(country => (
          <li key={country.name}>
            {country.flags && <Image src={country.flags.svg} alt={country.name} width={30} height={20} loading="eager" />}
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
