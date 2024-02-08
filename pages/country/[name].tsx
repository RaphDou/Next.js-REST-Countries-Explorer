import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from '../../components/countryDetails/countryDetails';

const CountryPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setCountryDetails(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    if (name) {
      fetchCountryDetails();
    }
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      {countryDetails && <CountryDetails country={countryDetails} />}
    </div>
  );
};

export default CountryPage;
