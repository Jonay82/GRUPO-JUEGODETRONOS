import React, { useEffect, useState } from 'react';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';
import Search from '../../components/Search/Search';


import './CronologiaPage.scss';
import axios from 'axios';
import CharactersGalleryAge from '../../components/CharactersGalleryAge/CharactersGalleryAge'

const CronologiaPage = () => {

    const[characters, setCharacters] = useState([]);

    const getCharacters = async (searchText = "") => {
      const res = await axios.get(
        "https://api.got.show/api/show/characters" + searchText
      );
      console.log(res.data)
      setCharacters(res.data)
    };
  
    useEffect(() => {getCharacters()}, []);


  return (
    <>
        <div className='crono'>

        <div className='crono__navbar'>
          <div className='crono__navbar--buscador'>
            <Search onSubmit={getCharacters}></Search>
          </div>
          <div className='crono__navbar--idiomas'>
            <HomeReturn></HomeReturn>
            <Flags></Flags>
          </div>
        </div>
         <CharactersGalleryAge list={characters}></CharactersGalleryAge>
        </div>
    </>
  )
}

export default CronologiaPage
