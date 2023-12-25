import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from '../public/img/WhatsAppImage2023-08-18at2.37.45PM.jpg'
import img2 from '../public/img/JK2319..jpg'
import img3 from '../public/img/S01e7c5c3f5bf4632b8e94d2d73cd6f6e5_jpg_640x640Q90_jpg.jpg'
import img4 from '../public/img/stone-harbor-t-shirts-men-s-super-soft-basic-t-shirt-33732209901621_5000x.webp'
import img5 from '../public/img/0a29d224-1c0e-4dc0-abd4-1714272ed93d_2000x.webp'
import img6 from '../public/img/free-palestine-t-shirt-for-men-500x500.webp'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react'
function App() {
  let products =[
    {
      src:img1,
      title:'Denom jeans',
      price:'500',
      qty:0,
      
    },
    {
      src:img2,
      title:'leather jacket',
      price:'1000',
      qty:0,
      
    },
    {
      src:img3,
      title:'T shirt',
      price:'300',
      qty:0,
      
    },
    {
      src:img4,
      title:"MEN'S SUPER SOFT BASIC T SHIRT",
      price:'600',
      qty:0,
      
    },
    {
      src:img5,
      title:'USPA PRINTED FULL SLEEVES TEE SHIRT',
      price:'1000',
      qty:0,
      
    },
    {
      src:img6,
      title:'Printed Cotton FREE PALESTINE T SHIRT FOR MEN',
      price:'500',
      qty:0,
      
    }
  ];

  const [totals, setTotals] = useState(Array(products.length).fill(0));

const [counter,setCounter]= useState(0)
  function inc(index) {
  setCounter(counter+1)
  console.log(counter);
    const copy = [...products];
    copy[index].qty++;
    const newTotals = [...totals];
    newTotals[index] += parseInt(copy[index].price);
    setTotals(newTotals);
  }

  return (
    <div id='d1'>
  
      {products.map((p, index) => (
        <div className="col" >
          <div className="card h-100">
            <img src={p.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. {p.price}</h5>
              <h5 className="card-title">{p.title}</h5>
            
              <h3>Total bill= {totals[index]}</h3>
              <button
                onClick={() => inc(index)}
                className="btn btn-primary"
                type="submit"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
