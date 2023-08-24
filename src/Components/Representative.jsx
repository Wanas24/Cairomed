import React, { useEffect, useState } from 'react'
import Partic from './partic'
import {getDocs,collection,query, where,} from 'firebase/firestore'
import{db} from '../Config/Firebase'

function Representative() {

    const[representativesList,setrepresentativesList]=useState([])
const representativesCollectionRef=collection(db,"Representatives")
useEffect(()=>{
  getRepresentativesList()
},[])


async function getRepresentativesList(){
const data=await getDocs(representativesCollectionRef)
const filterdData=data.docs.map((doc)=>({
    ...doc.data(),
    id: doc.id
}))
setrepresentativesList(filterdData)
console.log(filterdData)
}

  return (<>
  
  <Partic/>
  <div className=' container mt-5'>
<div className='row flex-row-reverse justify-content-evenly mt-5'>
{representativesList.map((representative)=>(



  <div class="card" style={{ width: '18rem' }}>
  <img src={representative.ImgURL} class="card-img-top" alt="..."/>
  <div class="card-body ProductDetailsAR">
    <p class="card-text"> <i class="fa-regular fa-address-card"></i><span className=''>الاسم: </span>{representative.Name} </p>
    <p class="card-text"><i class="fa-solid fa-map-location-dot"></i><span className=''>المنطقة: </span>{representative.Region}</p>
    <p class="card-text"><i class="fa-solid fa-phone"></i><span className=''>رقم الموبيل: </span>{representative.Phone}</p>
  </div>

</div> 

))}

  </div>
</div>
  
  </>
  )
}

export default Representative