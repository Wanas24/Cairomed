import React, { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../Config/Firebase'
import { useParams } from 'react-router-dom'
import { Cart } from './Cart'
import { useContext } from 'react'
import { CartContext } from './Context/cartStore'
import Swal from 'sweetalert2'
import LoopingParagraph from './FullStop'




function SingleProduct() {

  let [lang,setlang] =useState('العربية') 

  const [singleProduct, setSingleProduct] = useState(null)
  // const [cart,setCart]=useState([])

  let {myCart}=useContext(CartContext)
  let {setMyCart}=useContext(CartContext)


  useEffect(() => {
    getSingleProduct()
    console.log({myCart})
    

    // console.log('mycart',cart)
    // console.log('single',singleProduct)
  }, [])

  
  

  let {productId}=useParams()
  async function getSingleProduct() {
    const singleProductRef = doc(db, "ArabcoProducts", `${productId}`)
    const data = await getDoc(singleProductRef)

    if (data.exists()) {
      setSingleProduct({ ...data.data(), id: data.id })
      console.log(data.data())
    } else {
      console.log("No such Product!");
    }
  }

  

  function setLang(){
    if (lang ==='العربية'){
      setlang('ENG')
    }
    else if (lang==='ENG'){
      setlang("العربية")
    }
  }
  let addToCart=()=>{
    // console.log('we are in the cart')
  if (singleProduct){

    // setCart([...cart,{...singleProduct}])
    setMyCart([...myCart,{...singleProduct}])

    console.log('contextcart',myCart)


    // localStorage.setItem('MyCart',JSON.stringify({...singleProduct}))
  }
 
    
    // console.log("added cart item ",cart)
    Swal.fire(
      '  تم اضافة المنتج الى سلتك بنجاح',
      '',
      'success'
    )
  }



  return (
  <>

  <Cart  cart={[myCart,setMyCart]}/>
      <div className="lang">
                    {/* <i class="fa-solid fa-gear fs-3 text-white fa-spin"> */}
                  <button onClick={setLang} className='btn  myBtn  d-flex align-items-center justify-content-center '>{lang}</button>
                    
               </div>
  {
    lang==="ENG"? <><div>
    {singleProduct ? (
      <div className='container'>
        <h2 className='text-center mt-7'>{singleProduct.ProductNameENG}</h2>
        <div className='btmBorder'></div>
    

        <div className='row justify-content-between flex-row-reverse'>
        <div className='col-lg-3 col-md-12 text-center'>
        <button onClick={()=>addToCart()} className="btn btn-success mt-5 mb-3">Add to cart                   <i className="fa-solid fa-cart-shopping"></i>
</button>
<br />
  <img src={singleProduct.ImgURL} alt="" srcset="" className='singleProductImg align-self-center' />
</div>
        <div className='col-lg-6 col-md-12 ProductDetailsENG'>
        {singleProduct.CompositionENG?<>
           
           <h3>Composition:</h3>
           
           <LoopingParagraph text={singleProduct.CompositionENG} />
           
          </>:<></>

          } 
           {singleProduct.AdvantagesENG?<>
             <h3>Advantages:</h3>
             <LoopingParagraph text={singleProduct.AdvantagesENG} />
</>:
             <></>
           }
           {singleProduct.DrugInteractionsENG?<>
             <h3>Drug Interactions:</h3>
             <p>{singleProduct.DrugInteractionsENG}</p></>:
             <></>
           }
           {singleProduct.UsageENG?<>
             <h3> Usage:</h3>
             <LoopingParagraph text={singleProduct.UsageENG} />
</>:
             <></>
           }
           {singleProduct.ContraindicationsENG?<>
             <h3> Contraindications:</h3>
             <p>{singleProduct.ContraindicationsENG}</p></>:
             <></>
           }
           {singleProduct.PropertiesENG?<>
             <h3> Properties:</h3>
             <p>{singleProduct.PropertiesENG}</p></>:
             <></>
           }
           {singleProduct.DoseENG?<>
             <h3> Dose:</h3>
             <LoopingParagraph text={singleProduct.DoseENG} />
</>:
             <></>
           }
           {singleProduct.PreprationENG?<>
             <h3> Prepration:</h3>
             <p>{singleProduct.PreprationENG}</p></>:
             <></>
           }
           {singleProduct.SideEffectsENG?<>
             <h3> Side Effects:</h3>
             <LoopingParagraph text={singleProduct.SideEffectsENG} />

             </>:
             <></>
           }
           {singleProduct.StorageENG?<>
             <h3> Storage Condition:</h3>
             <p>{singleProduct.StorageENG}</p></>:
             <></>
           }
           {singleProduct.StoppingENG?<>
             <h3> Withdrawal Time:</h3>
             <LoopingParagraph text={singleProduct.StoppingENG} />
             </>:
             <></>
           }
           {singleProduct.WarningsENG?<>
             <h3> Warnings & Precautions:</h3>
             
             <p>{singleProduct.WarningsENG}</p></>:
             <></>
           }
        {singleProduct.DosageFormENG?<>
         
         <h3>Dosage Form:</h3>
         <p>{singleProduct.DosageFormENG}</p>
        </>:<></>

        } 
         {singleProduct.IngredientsENG?<>
           <h3>Active Ingredients & Strengths:</h3>
           <p>{singleProduct.IngredientsENG}</p></>:
           <></>
         }
       
       {singleProduct.PhysicalCharENG?<>
           <h3>Physical characteristics:</h3>
           <p>{singleProduct.PhysicalCharENG}</p></>:
           <></>
         }
         
         {singleProduct.ShelfLifeENG?<>
           <h3>Shelf Life:</h3>
           <p>{singleProduct.ShelfLifeENG}</p></>:
           <></>
         }
       
         {singleProduct.PackENG?<>
           <h3>Approved Pack:</h3>
           <p>{singleProduct.PackENG}</p></>:
           <></>
         }
        
         

        </div>

        </div>
        
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div> </>:
    <div>
      {singleProduct ? (
        <div className='container'>
          <h2 className='text-center mt-7'>{singleProduct.ProductName}</h2>
          <div className='btmBorder'></div>

          <div className='row justify-content-between'>
          <div className='col-lg-3 col-md-12 text-center'>
          <button onClick={()=>addToCart(SingleProduct)} className="btn btn-success mt-5 mb-3"> <i className="fa-solid fa-cart-shopping"></i>    أضف الى السلة
</button>
<br />
  <img src={singleProduct.ImgURL} alt="" srcset="" className='singleProductImg align-self-center' />
</div>
          <div className='col-lg-6 col-md-12  ProductDetailsAR'>
           {singleProduct.Composition?<>
           
            <h3>التركيب:</h3>
            <LoopingParagraph text={singleProduct.Composition} />
           </>:<></>

           } 
            {singleProduct.Advantages?<>
              <h3>الأهمية:</h3>
              <LoopingParagraph text={singleProduct.Advantages} />

              </>:
              <></>
            }
            {singleProduct.DrugInteractions?<>
              <h3>التداخلات الدوائية:</h3>
              <p>{singleProduct.DrugInteractions}</p></>:
              <></>
            }
            {singleProduct.Usage?<>
              <h3> الاستخدام:</h3>
              <LoopingParagraph text={singleProduct.Usage} />
</>:
              <></>
            }
            {singleProduct.Contraindications?<>
              <h3> موانع الاستخدام:</h3>
              <p>{singleProduct.Contraindications}</p></>:
              <></>
            }
            {singleProduct.Properties?<>
              <h3> الخصائص:</h3>
              <p>{singleProduct.Properties}</p></>:
              <></>
            }
            {singleProduct.Dose?<>
              <h3> الجرعة:</h3>
              <LoopingParagraph text={singleProduct.Dose} />
</>:
              <></>
            }
            {singleProduct.Prepration?<>
              <h3>طريقة التحضير:</h3>
              <p>{singleProduct.Prepration}</p></>:
              <></>
            }
            {singleProduct.SideEffects?<>
              <h3> الأعراض الجانبية:</h3>
              <LoopingParagraph text={singleProduct.SideEffects} />

              </>:
              <></>
            }
            {singleProduct.Storage?<>
              <h3> التخزين:</h3>
              <p>{singleProduct.Storage}</p></>:
              <></>
            }
            {singleProduct.Stopping?<>
              <h3> فترة الرفع:</h3>
              <p>{singleProduct.Stopping}</p></>:
              <></>
            }
            {singleProduct.Warnings?<>
              <h3> الاحتياطات والتحذيرات:</h3>
              
              <p>{singleProduct.Warnings}</p></>:
              <></>
            }
            {singleProduct.Pack?<>
              <h3> العبوة:</h3>
              
              <p>{singleProduct.Pack}</p></>:
              <></>
            }
            {singleProduct.PhysicalChar?<>
              <h3> الخصائص الفيزيائية:</h3>
              
              <p>{singleProduct.PhysicalChar}</p></>:
              <></>
            }
          

          </div>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  }
    
  </>
  )
}

export default SingleProduct