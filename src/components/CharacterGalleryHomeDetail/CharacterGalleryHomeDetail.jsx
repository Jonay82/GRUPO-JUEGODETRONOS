import React from 'react';
import "./CharactersGalleryHomeDetail.scss";

export default function Gallery({ list }) {


  return (
    <div className='gallery'>
      {list.map((item, id) => (

        <figure className='gallery--card' key={id}>
              <img src={item.image} alt="imagen"/>
              <p class="gallery--text">{item.name}</p>

            <div className='gallery__container'>

                <div class="gallery__container--box">
                    <p>Lema</p>
                    <div className='gallery__container--box_detail'>{item.words}
                    </div>                   
                </div>

                <div class="gallery__container--box">               
                    <p>Sede</p>
                    <div className='gallery__container--box_detail'>{item.sede}
                    </div>                  
                </div>

                <div class="gallery--box">
                    <p>Region</p>
                    <div className='gallery__container--box_detail'>{item.region}
                    </div>                   
                </div>

                <div class="gallery__container--box">
                    <p>Alianza</p>
                    <div className='gallery__container--box_detail'>{item.allegiance}
                    </div>                   
                </div>

                <div class="gallery--box">
                    <p>Religiones</p>
                    <div className='gallery--box_detail'>{item.religion}
                    </div>                   
                </div>

                <div class="gallery--box">
                     <p>Fundacion</p>     
                    <div className='gallery--box_detail'>{item.founded}
                    </div>
                </div>    

            </div>  
        </figure>
      ))};
    </div>
  );
}

