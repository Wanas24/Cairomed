import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Firebase'
import Partic from './partic'

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
  <div className=' container mt-7'>
<div className='row flex-row-reverse justify-content-evenly mt-5'>
{representativesList.map((representative)=>(



  <div class="card mb-3" style={{ width: '18rem' }}>
  <img src={representative.ImgURL} class="card-img-top cardImg" alt="..."/>
  <div class="card-body ProductDetailsAR ">
    <p class="card-text"><i class="fa-regular fa-address-card cardText"></i><span className='cardText'> الاسم: </span>{representative.Name} </p>
    <p class="card-text"><i class="fa-solid fa-map-location-dot cardText"></i><span className='cardText'> المنطقة: </span>{representative.Region}</p>
    <p class="card-text"><i class="fa-solid fa-phone cardText"></i><span className='cardText'> رقم الموبيل: </span>{representative.Phone}</p>
  </div>

</div> 

))}

  </div>
</div>
  
  </>
  )
}

export default Representative