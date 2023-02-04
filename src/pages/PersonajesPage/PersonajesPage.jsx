import React, { useEffect, useState } from 'react';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';

import './PersonajesPage.scss';
import Search from '../../components/Search/Search';
import axios from 'axios';
import CharactersGallery from '../../components/CharactersGallery/CharactersGallery';

const PersonajesPage = () => {

  const [characters, setCharacters] = useState([]);

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
      <div className='personajes'>

        <div className='personajes__navbar'>
          <div className='personajes__navbar--buscador'>
            <Search onSubmit={getCharacters}></Search>
          </div>
          <div className='personajes__navbar--idiomas'>
              <HomeReturn></HomeReturn>
              <Flags></Flags>
          </div>
        </div>
          <CharactersGallery list={characters}></CharactersGallery>
      </div>

    </>
  )
}
export default PersonajesPage