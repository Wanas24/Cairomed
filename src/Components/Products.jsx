import { collection, getDocs, query, where, } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Config/Firebase'
import Arabcologo from "../images/ArabcoLogo.png"
import Biologo from "../images/BiodreamLogo.png"
import Mycrologo from "../images/MycrofeedLogo.png"



function Products() {
const[productsList,setproductsList]=useState([])
const productsCollectionRef=collection(db,"ArabcoProducts")
useEffect(()=>{
  getProductList()
},[])


async function getProductList(){
const data=await getDocs(productsCollectionRef)
const filterdData=data.docs.map((doc)=>({
    ...doc.data(),
    id: doc.id
}))
setproductsList(filterdData)
console.log(filterdData)
}


// Filtering
async function getArabco() {
  const querySnapshot = await getDocs(
    query(collection(db, 'ArabcoProducts'), where('Company', '==', 'Arabco'))
  );
  const filteredData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  setproductsList(filteredData);
  console.log(filteredData);
}
async function getMycro() {
  const querySnapshot = await getDocs(
    query(collection(db, 'ArabcoProducts'), where('Company', '==', 'Mycro'))
  );
  const filteredData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  setproductsList(filteredData);
  console.log(filteredData);
}
async function getBio() {
  const querySnapshot = await getDocs(
    query(collection(db, 'ArabcoProducts'), where('Company', '==', 'Bio'))
  );
  const filteredData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  setproductsList(filteredData);
  console.log(filteredData);
}




    return (
    < >
    
    <h2 className='text-center mt-4'>Products</h2>
    <div className='btmBorder'></div>
      <div className='Filters d-flex justify-content-center mt-3'>
        <div className=' container'>
          <div className='row justify-content-center container'>

    <button onClick={getProductList} className='btn btn-success myBtn PartnersLogo col-3'>All</button>
    <img onClick={getArabco} className='PartnersLogo  pointer col-3' src={Arabcologo} alt="" srcset="" />
    <img onClick={getMycro} className='PartnersLogo  pointer col-3' src={Mycrologo} alt="" srcset="" />
    <img onClick={getBio} className='PartnersLogo  pointer col-3' src={Biologo} alt="" srcset="" />
          </div>
        </div>
    {/* <button onClick={getArabco} className='btn btn-success m-3'></button>
    <button onClick={getMycro} className='btn btn-success m-3'>Mycro</button>
    <button onClick={getBio} className='btn btn-success m-3'>Bio</button> */}
      </div>
    
    <div className='container mt-3'>
      <div class="row firstSection flex flex-wrap mt-5">
    {productsList.map((product) => (
      
      <div class="col-md-4 product">
          <div class="item rounded m-3">
            <div class="item-layer ">
              <Link to={`SingleProduct/${product.id}`}>
              <img src={product.ImgURL}  alt="" />
              
              <div
                class="layer d-flex justify-content-center align-items-center text-white text-center"
                >
                <div>
                  <h3>{ product.ProductNameENG  }</h3>
                  {/* <p>{ product.Price }LE</p> */}
                </div>
              </div>
                </Link>
            </div>

          </div>
        
      </div>

      
      
      ))}
    </div>
    </div>
   

    
    </>
  )
}

export default Products