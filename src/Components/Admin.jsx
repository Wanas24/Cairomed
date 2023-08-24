import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div className='pt-5'>
    <h2 className='text-center '>Welcome Admin </h2>
    <div className='btmBorder '></div>
    <div className='container'>
        <div className='row d-flex justify-content-around mt-5'>

            <Link className='col-lg-3 col-sm-6 text-decoration-none text-dark m-3'to='/ManageProducts'>
            
            <div className='action  text-center '>
            <i class="fa-solid fa-prescription-bottle"></i>             
                <h3>Manage Products</h3>
            </div>
            </Link>
            <Link className='col-lg-3 col-sm-6 text-decoration-none text-dark m-3' to='/ManageArticles'>
            
            <div className='action  text-center '>
            <i class="fa-regular fa-newspaper"></i>
             
                <h3>Manage Scientific Articles </h3>
            </div>
            </Link>
            
            <Link className='col-lg-3 col-sm-6 text-decoration-none text-dark m-3' to='/ourOrders'>
            
            <div className='action  text-center '>
            <i class="fa-solid fa-list-check"></i>             
                <h3>Check Orders </h3>
            </div>
            </Link>
            
        </div>
    </div>
    
    
    
    </div>
  )
}

export default Admin