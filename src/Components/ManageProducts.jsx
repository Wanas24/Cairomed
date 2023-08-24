import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Config/Firebase";

function ManageProducts() {
  const [formData, setFormData] = useState({
    ProductNameENG: "",
    CompositionENG: "",
    AdvantagesENG: "",
    DrugInteractionsENG: "",
    UsageENG: "",
    ContraindicationsENG: "",
    PropertiesENG: "",
    DoseENG: "",
    PreprationENG: "",
    SideEffectsENG: "",
    StorageENG: "",
    StoppingENG: "",
    WarningsENG: "",
    DosageFormENG: "",
    IngredientsENG: "",
    PhysicalCharENG: "",
    ShelfLifeENG: "",
    PackENG: "",
    Company: "",
    ProductName: "",
    Composition: "",
    Advantages: "",
    DrugInteractions: "",
    Usage: "",
    Contraindications: "",
    Properties: "",
    Dose: "",
    Prepration: "",
    SideEffects: "",
    Storage: "",
    Stopping: "",
    Warnings: "",
    DosageForm: "",
    Ingredients: "",
    PhysicalChar: "",
    ShelfLife: "",
    Pack: "",
    ImgURL: "",
  });
  useEffect(() => {
    getProductsList();
  }, []);
  const [isAdd, setIsAdd] = useState(true);

  const [ProductId, setProductId] = useState();

  const [productsList, setproductsList] = useState([]);
  const productsCollectionRef = collection(db, "ArabcoProducts");

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

    if (isAdd) {
      // Add a new product
      await addDoc(productsCollectionRef, data);
      Swal.fire("تم اضافة المنتج", "", "success");
      getProductsList()
      clearForm()
    } else {
      // Update an existing product
      const productDoc = doc(db, "ArabcoProducts", ProductId);
      await updateDoc(productDoc, data);
      Swal.fire("تم تحديث المنتج", "", "success");
      setIsAdd(true);
      setProductId("");
      getProductsList()
      clearForm()
    }

    // await addDoc(productsCollectionRef, data);
    // clearForm();
    // Swal.fire("تم اضافة المنتج", "", "success");
    // getProductsList();
  };
  async function getProductsList() {
    const data = await getDocs(productsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setproductsList(filteredData);
    console.log(filteredData);
  }

  function clearForm() {
    setFormData({
      ProductNameENG: "",
      CompositionENG: "",
      AdvantagesENG: "",
      DrugInteractionsENG: "",
      UsageENG: "",
      ContraindicationsENG: "",
      PropertiesENG: "",
      DoseENG: "",
      PreprationENG: "",
      SideEffectsENG: "",
      StorageENG: "",
      StoppingENG: "",
      WarningsENG: "",
      DosageFormENG: "",
      IngredientsENG: "",
      PhysicalCharENG: "",
      ShelfLifeENG: "",
      PackENG: "",
      Company: "",
      ProductName: "",
      Composition: "",
      Advantages: "",
      DrugInteractions: "",
      Usage: "",
      Contraindications: "",
      Properties: "",
      Dose: "",
      Prepration: "",
      SideEffects: "",
      Storage: "",
      Stopping: "",
      Warnings: "",
      DosageForm: "",
      Ingredients: "",
      PhysicalChar: "",
      ShelfLife: "",
      Pack: "",
      ImgURL: "",
    });
    setIsAdd(true);
  }

  async function deleteproduct(orderId) {
    const productDoc = doc(db, "ArabcoProducts", orderId);
    await deleteDoc(productDoc);
    Swal.fire("تم حذف المنتج", "", "success");
    getProductsList();
  }

  function editeproduct(product) {
    setFormData({
      ProductNameENG: `${product.ProductNameENG}`,
      CompositionENG: `${product.CompositionENG}`,
      AdvantagesENG: `${product.AdvantagesENG}`,
      DrugInteractionsENG: `${product.DrugInteractionsENG}`,
      UsageENG: `${product.UsageENG}`,
      ContraindicationsENG: `${product.ContraindicationsENG}`,
      PropertiesENG: `${product.PropertiesENG}`,
      DoseENG: `${product.DoseENG}`,
      PreprationENG: `${product.PreprationENG}`,
      SideEffectsENG: `${product.SideEffectsENG}`,
      StorageENG: `${product.StorageENG}`,
      StoppingENG: `${product.StoppingENG}`,
      WarningsENG: `${product.WarningsENG}`,
      DosageFormENG: `${product.DosageFormENG}`,
      IngredientsENG: `${product.IngredientsENG}`,
      PhysicalCharENG: `${product.PhysicalCharENG}`,
      ShelfLifeENG: `${product.ShelfLifeENG}`,
      PackENG: `${product.PackENG}`,
      Company: `${product.Company}`,
      ProductName: `${product.ProductName}`,
      Composition: `${product.Composition}`,
      Advantages: `${product.Advantages}`,
      DrugInteractions: `${product.DrugInteractions}`,
      Usage: `${product.Usage}`,
      Contraindications: `${product.Contraindications}`,
      Properties: `${product.Properties}`,
      Dose: `${product.Dose}`,
      Prepration: `${product.Prepration}`,
      SideEffects: `${product.SideEffects}`,
      Storage: `${product.Storage}`,
      Stopping: `${product.Stopping}`,
      Warnings: `${product.Warnings}`,
      DosageForm: `${product.DosageForm}`,
      Ingredients: `${product.Ingredients}`,
      PhysicalChar: `${product.PhysicalChar}`,
      ShelfLife: `${product.ShelfLife}`,
      Pack: `${product.Pack}`,
      ImgURL: `${product.ImgURL}`,
    });
    setIsAdd(false);
    setProductId(product.id);
    scrollToTop();
  }

     
  function scrollToTop (){
 
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });}
  // async function updateproduct() {
  //   const productDoc = doc(db, "ArabcoProducts", ProductId);
  //   await updateDoc(productDoc, formData);
  //   await getProductsList(); // Await the getProductsList() function call
  
  //   setIsAdd(true);
  //   clearForm();
  //   Swal.fire('تم تحديث المنتج', '', 'success');
  // }
  
  



  return (
    <>
      <div className="container ManageDoc">
        <br />
        <form className="form-control" onSubmit={handleSubmit} id="form">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="ProductNameENG">Product Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ProductNameENG"
                    name="ProductNameENG"
                    value={formData.ProductNameENG}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="CompositionENG">Composition:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="CompositionENG"
                    name="CompositionENG"
                    value={formData.CompositionENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="AdvantagesENG"> Advantages:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="AdvantagesENG"
                    name="AdvantagesENG"
                    value={formData.AdvantagesENG}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="DrugInteractionsENG">
                    Drug Interactions:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="DrugInteractionsENG"
                    name="DrugInteractionsENG"
                    value={formData.DrugInteractionsENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="UsageENG">Usage:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="UsageENG"
                    name="UsageENG"
                    value={formData.UsageENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="ContraindicationsENG">
                    Contraindications:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="ContraindicationsENG"
                    name="ContraindicationsENG"
                    value={formData.ContraindicationsENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="PropertiesENG">Properties:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="PropertiesENG"
                    name="PropertiesENG"
                    value={formData.PropertiesENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="DoseENG">Dose:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="DoseENG"
                    name="DoseENG"
                    value={formData.DoseENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="PreprationENG">Prepration:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="PreprationENG"
                    name="PreprationENG"
                    value={formData.PreprationENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="SideEffectsENG">SideEffects:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="SideEffectsENG"
                    name="SideEffectsENG"
                    value={formData.SideEffectsENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="StoppingENG">Withdrawal Time:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="StoppingENG"
                    name="StoppingENG"
                    value={formData.StoppingENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="WarningsENG">Warnings & Precautions:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="WarningsENG"
                    name="WarningsENG"
                    value={formData.WarningsENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="DosageFormENG">Dosage Form:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="DosageFormENG"
                    name="DosageFormENG"
                    value={formData.DosageFormENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="IngredientsENG">
                    Active Ingredients & Strengths:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="IngredientsENG"
                    name="IngredientsENG"
                    value={formData.IngredientsENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="PhysicalCharENG">
                    Physical characteristics:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="PhysicalCharENG"
                    name="PhysicalCharENG"
                    value={formData.PhysicalCharENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="ShelfLifeENG">Shelf Life:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ShelfLifeENG"
                    name="ShelfLifeENG"
                    value={formData.ShelfLifeENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="PackENG">Approved Pack:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="PackENG"
                    name="PackENG"
                    value={formData.PackENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="StorageENG">Storage:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="StorageENG"
                    name="StorageENG"
                    value={formData.StorageENG}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Company">Company:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Company"
                    name="Company"
                    value={formData.Company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* arabic */}

              <div className="row col-6 ProductDetailsAR">
                <div>
                  <label htmlFor="ProductName">اسم المنتج:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ProductName"
                    name="ProductName"
                    value={formData.ProductName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Composition">التركيب:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Composition"
                    name="Composition"
                    value={formData.Composition}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Advantages"> المميزات:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Advantages"
                    name="Advantages"
                    value={formData.Advantages}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="DrugInteractions">التداخلات الدوائية:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="DrugInteractions"
                    name="DrugInteractions"
                    value={formData.DrugInteractions}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Usage">الاستخدام:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Usage"
                    name="Usage"
                    value={formData.Usage}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Contraindications">موانع الاستخدام:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Contraindications"
                    name="Contraindications"
                    value={formData.Contraindications}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Properties">الخصائص:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Properties"
                    name="Properties"
                    value={formData.Properties}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Dose">الجرعة:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Dose"
                    name="Dose"
                    value={formData.Dose}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Prepration">طريقة التحضير:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Prepration"
                    name="Prepration"
                    value={formData.Prepration}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="SideEffects">الأعراض الجانبية:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="SideEffects"
                    name="SideEffects"
                    value={formData.SideEffects}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Stopping">فترة الرفع:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Stopping"
                    name="Stopping"
                    value={formData.Stopping}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Warnings">التحذيرات والاحتياطات:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Warnings"
                    name="Warnings"
                    value={formData.Warnings}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="DosageForm">شكل الجرعة:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="DosageForm"
                    name="DosageForm"
                    value={formData.DosageForm}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Ingredients">المكونات الفعالة:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Ingredients"
                    name="Ingredients"
                    value={formData.Ingredients}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="PhysicalChar">الخصائص الفيزيائية:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="PhysicalChar"
                    name="PhysicalChar"
                    value={formData.PhysicalChar}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="ShelfLife">مدة الصلاحية:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ShelfLife"
                    name="ShelfLife"
                    value={formData.ShelfLife}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Pack"> العبوة:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Pack"
                    name="Pack"
                    value={formData.Pack}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="Storage">التخزين:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Storage"
                    name="Storage"
                    value={formData.Storage}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="ImgURL">لينك الصورة:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ImgURL"
                    name="ImgURL"
                    value={formData.ImgURL}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className=" d-flex justify-content-center align-content-between ">
            <button className="btn btn-success m-3" type="submit">{isAdd ? "Add" : "Update"}</button>
              <button onClick={clearForm} className="btn btn-success m-3 ">
                Clear Form
              </button>

              {/* <input type="text" placeholder='Search' className='m-auto w-50 form-control'  value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              searchData(event.target.value);
            }} /> */}
            </div>
          </div>
        </form>

        <div className="mt-5 tableHeight200">
          <table className="table overflow-scroll text-center  ">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Company</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.ProductName}</td>
                    <td>{product.Company}</td>

                    <td>
                      <button
                        onClick={() => {
                          editeproduct(product);
                        }}
                        className="btn btn-info mx-4"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteproduct(product.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageProducts;
