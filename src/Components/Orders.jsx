import React, { useEffect, useState } from 'react'
import {getDocs,collection,deleteDoc,doc} from 'firebase/firestore'
import{db} from '../Config/Firebase'
import Swal from 'sweetalert2'





function Orders() {
    const[ordersList,setOrdersList]=useState([])
    const ordersCollectionRef=collection(db,"Orders")
    useEffect(()=>{
        getOrdersList()
    },[])


    


    async function getOrdersList(){
        const data = await getDocs(ordersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
    
        // Sort the data by the Time field
        const sortedData = filteredData.sort((a, b) => {
            const timeA = new Date(a.Time);
            const timeB = new Date(b.Time);
            return timeA - timeB;
        });
    
        setOrdersList(sortedData);
        console.log(sortedData);
    }


    async function deleteOrder(orderId){
        const orderDoc=doc(db,"Orders",orderId)
        await deleteDoc(orderDoc);
        Swal.fire(
            'تم حذف الأوردر',
            '',
            'success'
          )
        getOrdersList()
    }

  return (


    <div className='ourOrders'>
        
        <div>
      
    </div>

            <div className='container'>
                <div className='row  flex-row-reverse mt-5 justify-content-between'>
    {
        ordersList.length===0?<>
        <h3 className='text-center mt-5 '> *لا يوجد أوردرات*</h3>
        
        </>:
        ordersList.map((order)=>(<div className='col-lg-3 col-sm-6  mt-3 border singleOrder m-2'>
            
            <i onClick={()=>deleteOrder(order.id)} className="fas fa-trash-alt float-start px-3 delIcon "></i>
            <br />
            
            <div className='ProductDetailsAR'>

            <p>اسم العميل: {order.Name}</p>
            <p>تاريخ الأوردر: {order.Time}</p>
            <p>السلة: {order.Cart}</p>
            <p>رقم الموبيل: {order.Phone}</p>
            <p>المافظة: {order.Governorate}</p>
            <p>المدينة: {order.City}</p>
            <p>الشارع: {order.Street}</p>
            </div>
            
            
        </div>
        ))
    }
    </div>

</div>
    </div>
  )
}

export default Orders