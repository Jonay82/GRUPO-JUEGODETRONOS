import React from 'react';
import "./CharactersGalleryAge.scss";

export default function GalleryAge({ list }) {
  
  return (
    <div className='galleryAge'>
      {list.map((item, id) => (
        <figure className='galleryAge--card' key={id}>
              <img src={item.image} alt="imagen"/>
              <p>{item.name}</p>
              
        </figure>
      ))};
    </div>
  );
}