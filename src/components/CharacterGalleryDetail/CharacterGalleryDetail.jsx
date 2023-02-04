import React from 'react';
import "./CharactersGalleryDetail.scss";

export default function Gallery({ list }) {


  return (
    <div className='gallery'>
      {list.map((item, id) => (

        <figure className='gallery--card' key={id}>
              <img src={item.image} alt="imagen"/>
              <p class="gallery--text">{item.name}</p>

            <div className='gallery__container'>

                <div class="gallery__container--box">
                    <p>Casas</p>
                    <div className='gallery__container--box_detail'>{item.house}
                    </div>                   
                </div>

                <div class="gallery__container--box">               
                    <p>Alianza</p>
                    <div className='gallery__container--box_detail'>{item.allegiances}
                    </div>                  
                </div>

                <div class="gallery--box">
                    <p>Apariciones</p>
                    <div className='gallery__container--box_detail'>{item.appearances}
                    </div>                   
                </div>

                <div class="gallery__container--box">
                    <p>Padre</p>
                    <div className='gallery__container--box_detail'>{item.father}
                    </div>                   
                </div>

                <div class="gallery--box">
                    <p>Descendientes</p>
                    <div className='gallery--box_detail'>{item.siblings}
                    </div>                   
                </div>

                <div class="gallery--box">
                     <p>Titulos</p>     
                    <div className='gallery--box_detail'>{item.pagerank}
                    </div>
                </div>    

            </div>  
        </figure>
      ))};
    </div>
  );
}

