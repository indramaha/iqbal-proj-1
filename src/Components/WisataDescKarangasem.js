import {SiGooglemaps} from 'react-icons/si'
import { Link } from 'react-router-dom';

const WisataDescKarangasem = (props) => {
    return ( 
        <div className='wisatadesc-section'>
            <div>
                <Link to={'/registration'}><button className='wisatadesc-button-toform'>Isi Form</button></Link>
            </div>
            {
                props.wisataKarangasem.map((item, i) => {
                    return(
                        <div className='wisatadesc-card' key={i}>
                            <div className='wisatadesc-card-title-bg'>
                                <p className='wisatadesc-card-title-p'>{item.name}</p>
                            </div>
                            <div className='wisatadesc-img-bg'>
                                <img src={item.image} alt={item.name} className='wisatadesc-img'/>
                            </div>
                            <div className='wisatadesc-desc-bg'>
                                <div className='wisatadesc-desc'>
                                    <p>{item.desc}</p>
                                </div>
                                <div className='wisatadesc-tiket-bg'>
                                    {
                                        item.tiket.map((dtiket, i) => {
                                            return(
                                                <div key={i}>
                                                    <div className='wisatadesc-domestik'>
                                                        <p className='wisatadesc-domestik-title-p'>Domestik</p>
                                                        <p>Dewasa: Rp.{dtiket.domestikDewasa} </p>
                                                        <p>Anak-anak: Rp.{dtiket.domestikAnak}</p>
                                                    </div>
                                                    <div className='wisatadesc-turis'>
                                                        <p className='wisatadesc-turis-title-p'>Turis</p>
                                                        <p>Dewasa: Rp.{dtiket.turisDewasa}</p>
                                                        <p>Anak-anak: Rp.{dtiket.turisAnak}</p>
                                                    </div>
                                                    <div className='wisatadesc-maps-bg'>
                                                        <SiGooglemaps className='wisatadesc-maps'/>
                                                    </div>
                                                </div>
                                            )
                                        } )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default WisataDescKarangasem;