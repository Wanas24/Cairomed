import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/Firebase';
import { useContext } from 'react';
import { CartContext } from './Context/cartStore';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Order = () => {
  const ordersRef = collection(db, 'Orders');
  const { myCart } = useContext(CartContext);
  const { setMyCart } = useContext(CartContext);
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Governorate: '',
    City: '',
    Street: '',
    Cart: '',
    
  });

  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    setOrderItems(myCart.map((item) => item.ProductNameENG));
    setFormData((prevFormData) => ({
      ...prevFormData,
      Cart: myCart.map((item) => item.ProductNameENG).join(', '),
    }));
  }, [myCart]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function onSubmitOrder(event) {
    event.preventDefault();
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' });
    const data = { ...formData, Time: timestamp };
    await addDoc(ordersRef, data);
    clearForm();
    Swal.fire(
      'تم تسجيل طلبك',
      ' سيتواصل معك قسم المبيعات في خلال 12 ساعه كحد أقصى لتأكيد طلبك بالكميات والسعر',
      'success'
    )
    navigate('/')
  }

  function clearForm() {
    setFormData({
      Name: '',
      Phone: '',
      Governorate: '',
      City: '',
      Street: '',
      Cart: '',
    });
    setMyCart([]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' });
      setTime(date);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  

  return (
    <>


    
      <div className='container '>
        <h2 className='text-center'>Your Cart</h2>
        <div className='btmBorder'></div>

        <div className='container'>
          <div class='row firstSection flex flex-wrap'>
            {myCart.map((product) => (
              <div class='col-md-4 product'>
                <div class='item rounded m-3'>
                  <div class='item-layer '>
                    <img src={product.ImgURL} alt='' />
                    <div class='layer d-flex justify-content-center align-items-center text-white text-center'>
                      <div>
                        <h3>{product.ProductNameENG}</h3>
                        {/* <p>{ product.Price }LE</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <form className='form-control' onSubmit={onSubmitOrder} id='form'>
          <div>
            <label htmlFor='Name'> Name:</label>
            <input
              placeholder='الاسم'
              className='form-control'
              type='text'
              id='Name'
              name='Name'
              value={formData.Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='Phone'>Phone:</label>
            <input
              placeholder='رقم الموبيل'
              className='form-control'
              type='text'
              id='Phone'
              name='Phone'
              value={formData.Phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='Governorate'>Governorate:</label>
            <input
              placeholder='المحافظة'
              className='form-control'
              type='text'
              id='Governorate'
              name='Governorate'
              value={formData.Governorate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='City'>City:</label>
            <input
              placeholder='المدينة'
              className='form-control'
              type='text'
              id='City'
              name='City'
              value={formData.City}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor='Street'>Street:</label>
            <input
              placeholder='الشارع'
              className='form-control'
              type='text'
              id='Street'
              name='Street'
              value={formData.Street}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='Cart'>Cart:</label>
            <input
              className='form-control'
              type='text'
              id='Cart'
              name='Cart'
              value={formData.Cart}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div>
            <label htmlFor='time'>Time:</label>
            <input
             className='form-control'
               id='time' 
               name='time' 
               value={time}
               onChange={handleInputChange}
                disabled />
          </div>

          {/* {isLoading && <p>Loading...</p>}
          {errorMessage && <p className='text-danger'>Error: {errorMessage}</p>}
          {successMessage && <p className='text-success'>{successMessage}</p>} */}
          {/* <button type="submit">Submit</button> */}
        </form>
        <div className='d-flex justify-content-center mt-4'>
          <button form='form' type='submit' className='btn btn-success myBtn w-50 mb-4'>
            Make Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;