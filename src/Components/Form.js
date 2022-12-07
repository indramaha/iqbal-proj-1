// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {TbBrandWhatsapp} from 'react-icons/tb'
import Logo from '../Assets/GUIDE ME-01.png'
import './Form.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xpznvddg");
  if (state.succeeded) {
      return(
        <div className='form-after-submit'>
          <h3>Terimakasih Sudah mengisi formulir!</h3>
          <h5>Silahkan Konfirmasi Melalui WhatsApp</h5>
          <div className='form-after-submit-icon-bg'>
            <a href='' className='a'><TbBrandWhatsapp size={25}/></a>
          </div>
        </div>
        ) ;
  }
  return (
    <div className='form-section'>
      <div>
        <img src={Logo} alt='guideme-logo' className='form-logo-img'/>
      </div>
      <div className='form-regis'>
        <div className='form-title'>
          <p className='form-title-p'>Formulir Pendaftaran</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-form'>
            <div className='form-input-bg'>
              <label htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder='email@gmail.com'
                className='form-input'
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className='form-input-bg'>
              <label>
                Nama Lengkap
              </label>
              <input 
                placeholder='Ketik Nama Disini...'
                type='text'
                name='Nama Lengkap'
                className='form-input'
              />
            </div>
            <div className='form-input-bg'>
              <label>
                Sewa Mobil
              </label>
              <select
                name='Sewa Mobil'
                className='form-input'
              >
                <option value=''>Pilih Kapasitas</option>
                <option value='tidak'>Tidak</option>
                <option value='2-4 orang'>2-4 Orang (Rp.300.000/hari)</option>
                <option value='4-6 orang'>4-6 Orang (Rp.350.000/hari)</option>
                <option value='6-8 orang'>6-8 Orang (Rp.400.000/hari)</option>
              </select>
            </div>
            <div className='form-input-bg'>
              <label>
                Sewa Motor
              </label>
              <select
                name='Sewa Motor'
                className='form-input'
              >
                <option value=''>Pilih Motor</option>
                <option value='Tidak'>Tidak</option>
                <option value='Moge'>Moge (Contact WhatsApp)</option>
                <option value='Scoopy'>Honda Scoopy (RP.70.000/hari)</option>
                <option value='vespa matic'>Piagio Vespa Matic (RP.200.000/hari)</option>
              </select>
            </div>
            <div className='form-input-bg'>
              <label>
                Butuh Guide?
              </label>
              <select 
                name='Butuh guide ke'
                className='form-input'
              >
                <option value=''>Pilih Rute</option>
                <option value='Tidak'>Tidak</option>
                <option value='Jembrana'>Jembrana</option>
                <option value='Tabanan'>Tabanan</option>
                <option value='Badung'>Badung</option>
                <option value='Singaraja'>Singaraja</option>
                <option value='Karangasem'>Karangasem</option>
                <option value='Klungkung'>Klungkung</option>
                <option value='Bangli'>Bangli</option>
                <option value='Gianyar'>Gianyar</option>
                <option value='Denpasar'>Denpasar</option>
              </select>
            </div>
            <div className='form-input-bg'>
              <textarea
                id="message"
                name="message"
                placeholder='Tambahkan Pesan Jika Perlu...'
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <div className='form-button-bg'>
              <button type="submit" disabled={state.submitting} className='form-button'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;