import './Specialties.css';
import { useState } from 'react';
import { data } from './data';

function Specialties() {
  const [discount, setDiscount] = useState(0);
  const {id, text, image} = data[discount];

  const previousDiscount = () => {
    setDiscount(discount => {
      discount--;
      if (discount < 0) {
        return data.length - 1;
      }
      return discount;
    })
  }

  const nextDiscout = () => {
    setDiscount(discount => {
      discount++;
      if (discount > data.length - 1) {
        discount = 0;
      }
      return discount;
    })
  }

  return (<div> 
    <div className='arrows'>
     <button onClick={previousDiscount} className='btn-specialties'>🠀</button>
     <button onClick={nextDiscout} className='btn-specialties'>🠂</button>  
    </div> 

    <div className='section'>
      <h3 className='discount'>{text}</h3>
        <img src={image} width="400px" alt='image'/>
    </div>
  </div>)}

export default Specialties;