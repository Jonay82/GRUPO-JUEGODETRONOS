import React from 'react';
import "./CharactersGallery.scss";

export default function Gallery({ list }) {
  return (
    <div className='gallery'>
      {list.map((item, id) => (
        <figure className='gallery--card' key={id}>
              <img src={item.image} alt="imagen"/>
              <p>{item.name}</p>
        </figure>
      ))};
    </div>
  );
}