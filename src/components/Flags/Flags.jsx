import React, { useContext } from 'react';
import españa from '../../assets/bandera-españa.webp';
import uk from '../../assets/UK.png';
import "../../components/Flags/Flags.scss";
import { MyContext} from '../../context/MyContext';



const Flags = () => {
  //hemos quitado la t de las llaves
  const { changeLanguaje } = useContext(MyContext);
  return (
    <>
      <nav className='banderas'>
        <img onClick={() => changeLanguaje('es')} className='banderas--img' src={españa} alt='español'></img>
        <img onClick={() => changeLanguaje('en')} className='banderas--img' src={uk} alt='ingles'></img>
      </nav>
    </>
  )
}

export default Flags



