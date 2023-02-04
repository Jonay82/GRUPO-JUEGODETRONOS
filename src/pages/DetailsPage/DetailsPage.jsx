import "./DetailsPage.scss";
import HomeReturn from '../../components/HomeReturn/HomeReturn';
import Flags from '../../components/Flags/Flags';

const DetailsPage = () => {
  return (
    <>
    
    <div className='personajes'>

        <div className='personajes__navbar'>
            <div className='personajes__navbar--buscador'>
                    <HomeReturn></HomeReturn>
                    <Flags></Flags>
            </div>
       </div>
    </div>
    </>
  )
}

export default DetailsPage
