import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import {getDocs,collection,deleteDoc,doc,addDoc,updateDoc} from 'firebase/firestore'
import{db} from '../Config/Firebase'

export const ManageArticles = () => {
    const [formData, setFormData] = useState({
        Heading: '',
        Paragraph1: '',
        Paragraph2: '',
        Paragraph3: '',
        Paragraph4: '',
      });
      useEffect(()=>{
        getArticlesList()
    },[])
    const [isAdd, setIsAdd] = useState(true);
    const [articleId, setArticleId] = useState();

    const[articlesList,setArticlesList]=useState([])
    const articlesCollectionRef=collection(db,"Articles")

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = async (event) => {   
        event.preventDefault();
        // setIsLoading(true);
        // setErrorMessage('');
        // setSuccessMessage('');
        event.preventDefault();
        const data = { ...formData };
        await addDoc(articlesCollectionRef, data);
        clearForm();
        Swal.fire(
         'تم اضافة المقال',
        '',
        'success'
    )
    getArticlesList()

        // setResponse(data);
        // console.log(data);
        // getdata();
        // clearForm()
        // setIsLoading(false);
        // setSuccessMessage(data.success);
        // setErrorMessage(data.error.email||data.error.password||data.error.phone)
      }
    async function getArticlesList(){
        const data = await getDocs(articlesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        setArticlesList(filteredData);
        console.log(filteredData);
    }

    function clearForm() {
        setFormData({
          Heading: '',
          Paragraph1: '',
          Paragraph2: '',
          Paragraph3: '',
          Paragraph4: '',
        });
        setIsAdd(true)
      }


      async function deleteArticle(orderId){
        const articleDoc=doc(db,"Articles",orderId)
        await deleteDoc(articleDoc);
        getArticlesList()
    }


    function editeArticle(article){
    
        setFormData({
          Heading: `${article.Heading}`,
          Paragraph1: `${article.Paragraph1}`,
          Paragraph2: `${article.Paragraph2}`,
          Paragraph3: `${article.Paragraph3}`,
          Paragraph4: `${article.Paragraph4}`,
          
        });
        setIsAdd(false)
        
        setArticleId(article.id)
        // console.log(doctorId)
      }
      async function updateArticle(){
        const articleDoc=doc(db,"Articles",articleId)
        await updateDoc(articleDoc,formData);
        getArticlesList()
      
          setIsAdd(true)
          clearForm()
          // setButtonText('Add Doctor')
          Swal.fire(
            'تم تحديث المقال بنجاح',
            '',
            'success'
          )
        };

   return (<>
  <div className='container ManageDoc'>
    <br />
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
            <form className='form-control' onSubmit={handleSubmit} id='form'>
        <div>
          <label htmlFor="Heading">Heading:</label>
          <input
          className='form-control'
            type="text"
            id="Heading"
            name="Heading"
            value={formData.Heading}
            onChange={handleInputChange}
            required
            placeholder='العنوان'
          />
        </div>
        <div>
          <label htmlFor="Paragraph1">1st Paragraph:</label>
          <input
          className='form-control'
            type="text"
            id="Paragraph1"
            name="Paragraph1"
            value={formData.Paragraph1}
            onChange={handleInputChange}
            placeholder='الفقرة الأولى'
          />
        </div>
        <div>
          <label htmlFor="Paragraph2">2nd Paragraph:</label>
          <input
          className='form-control'
            type="text"
            id="Paragraph2"
            name="Paragraph2"
            value={formData.Paragraph2}
            onChange={handleInputChange}
            placeholder='الفقرة الثانية'
          />
        </div>
        <div>
          <label htmlFor="Paragraph3">3rd Paragraph:</label>
          <input
          className='form-control'
            type="text"
            id="Paragraph3"
            name="Paragraph3"
            value={formData.Paragraph3}
            onChange={handleInputChange}
            placeholder='الفقرة الثالثة'
          />
        </div>
        
        <div>
          <label htmlFor="Paragraph4">4th Paragraph:</label>
          <input
          className='form-control'
            type="text"
            id="Paragraph4"
            name="Paragraph4"
            value={formData.Paragraph4}
            onChange={handleInputChange}
            placeholder='الفقرة الرابعة'
          />
        </div>
        {/* {isLoading && <p>Loading...</p>}
        {errorMessage && <p className='text-danger'>Error: {errorMessage}</p>}
        {successMessage && <p className='text-success'>{successMessage}</p>} */}
        {/* <button type="submit">Submit</button> */}
      </form>
            </div>
            <div className='col-6 d-flex flex-column justify-content-center align-content-between '>
            {isAdd ? (
       <button form='form' type="submit" className='btn btn-success w-50 m-auto'>Add Article</button>
      ) : (
            
        <button onClick={() => updateArticle()} className='btn btn-success w-50 m-auto'>Update Article</button>

      )}
                {/* <button form='form' type="submit" className='btn btn-success w-50 m-auto'>00</button> */}
                <button onClick={clearForm} className='btn btn-success w-50 m-auto'>Clear Form</button>
                
                {/* <input type="text" placeholder='Search' className='m-auto w-50 form-control'  value={searchTerm}
  onChange={(event) => {
    setSearchTerm(event.target.value);
    searchData(event.target.value);
  }} /> */}

            </div>
        </div>

<div className='mt-5 tableHeight200'>

<table className="table overflow-scroll text-center  ">
  <thead>
    <tr>
     
      <th scope="col">Heading</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>





  {articlesList.map((article,index)=>{
    return (
      <tr key={index}>
        
        <td>{article.Heading}</td>
        
        <td>
        <button onClick={()=>{editeArticle(article)}} className='btn btn-info mx-4'>Edit</button>
        </td>
        <td>
          <button onClick={()=>{deleteArticle(article.id)}} className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    );
  })}






    {/* {doctorsData.data?.map((singleData,index)=>{
      return <tr key={index}>
      <th scope="row">{singleData.id}</th>
      <td>{singleData.fname}</td>
      <td>{singleData.lname}</td>
      <td>{singleData.email}</td>
      <td>{singleData.phone}</td>
      <td>{singleData.password}</td>
      <td>{singleData.(password)}</td>
      <td><button onClick={()=>{editeDoctor(singleData)}} className='btn btn-info mx-4'>Edit</button><button onClick={()=>{deleteDoctor(singleData.id)}} className='btn btn-danger'>Delete</button></td>
      
    </tr>
    })} */}

    
   
  </tbody>
</table> 
</div>


        
        
    </div>
  </div>
  </>
    
  )
}
