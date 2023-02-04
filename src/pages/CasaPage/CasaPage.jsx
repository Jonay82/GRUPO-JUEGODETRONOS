import React, { useEffect, useState } from 'react';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';

import './CasaPage.scss';
import Search from '../../components/Search/Search';
import axios from 'axios';
import HousesGallery from '../../components/HousesGallery/HousesGallery';

const CasaPage = () => {

  const [houses, setHouses] = useState([]);

  const getHouses = async (searchText = "") => {
    const res = await axios.get(
      "https://api.got.show/api/book/houses" + searchText
    );
    console.log(res.data)
    setHouses(res.data)
  };

  useEffect(() => {getHouses()}, []);

  return (
    <>
      
      <div className='personajes'>

        <div className='personajes__navbar'>
          <div className='personajes__navbar--buscador'>
            <Search onSubmit={getHouses}></Search>
          </div>
          <div className='personajes__navbar--idiomas'>
            <HomeReturn></HomeReturn>
            <Flags></Flags>
          </div>
        </div>
          <HousesGallery list={houses}></HousesGallery>
      </div>

    </>
  )
}

export default CasaPage
