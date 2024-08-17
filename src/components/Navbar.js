import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'; // Removed Typography import
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [bodyPartsData, setBodyPartsData] = useState([]); // Keep this only if you plan to use it

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, // Corrected to use environment variable
          },
        });
        const data = await response.json();

        if (Array.isArray(data)) {
          setBodyPartsData(data); // Keep this only if you plan to use it
        } else {
          throw new Error('Expected data to be an array but received an object');
        }
      } catch (error) {
        console.error('Error fetching body parts data:', error);
        setBodyPartsData([]); // Set an empty array to avoid breaking the UI
      }
    };

    fetchBodyParts();
  }, []);

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
