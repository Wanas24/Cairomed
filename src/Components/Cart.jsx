
import React, { useEffect, useState } from 'react'
import {getDocs,collection,query, where,} from 'firebase/firestore'
import{db} from '../Config/Firebase'
import { Link } from 'react-router-dom'
import Order from './Order'


export const Cart = (props) => {
  const [products,setProducts]=useState([])
  const productsCollectionRef=collection(db,"ArabcoProducts")

  
  async function getData(){

    const data=await getDocs(productsCollectionRef)
    const filterdData=data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
    }))
    setProducts(filterdData)
    // console.log(data)
    
  }
  useEffect(() => {
    getData();
  }, [])

 


  function removeFromCart(productToRemove){
    props.cart[1](props.cart[0].filter((product)=>product!==productToRemove))
  }

  
  
  

  return (


    <>
{/* {console.log(props.cart[0])} */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart </h5>
    <i className="fa-solid fa-cart-shopping"></i>
    <h5>السلة</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
      <div className="container mb-3 mt-3">
          <div className="row flex-wrap justify-content-between">
                {
              props.cart[0]?.map((product)=>{
                
                return <div key={product.id} className="card col-md-12 col-12" >
                <img src={product?.ImgURL} className="card-img-top cartimg" alt="..." style={{height: '15rem'}}/>
                <div className="card-body">
                  <h5 className="card-title">{product?.ProductName}</h5>
                  {/* <p className="card-text text-danger">Price: {product?.Price}$</p> */}
                  <button onClick={()=>removeFromCart(product)} className='btn btn-danger'>Remove from cart</button>
                </div>
              </div>

              })
              }
          </div>

             
      
          
      </div>
      {props.cart[0].length!=0?<div>
        {/* <h3>
      Total: {    props.cart[0].map((product)=>product.Price).filter((p)=> !isNaN(+p)).reduce((sum , current) => sum + current , 0)
}$
        
        </h3> */}
        <Link to='/Orders'>
        
         <button  className='btn btn-success'>CheckOut</button>
        </Link>
      </div>:<>
      
      <h3 className='text-center'>No Products in the cart</h3>
      <br />
      <br />
      <h3 className='text-center '>لا يوجد منتجات في السلة</h3>
      </>
      } 
      
  </div>
</div>
    </>
    
  )
}


