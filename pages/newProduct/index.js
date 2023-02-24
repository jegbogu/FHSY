
import { Fragment } from "react";
import ProductForm from "../../component/productForm";
import Head from "next/head";
 


 
function NewProduct() { 
  
  async function submitHandler(productData){

    const response = await fetch('api/new-product',{
      body: JSON.stringify(productData),
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      }
    
    })
    const data = await response.json();
    console.log(data)
    
     }
    
  return ( 
    <Fragment>
      <Head>
        <title>Add a New Product</title>
        <meta
          name='description'
          content='Add new products for online sales and services.'
        />
      </Head>
      <ProductForm onAddProduct={submitHandler}/>
      
    </Fragment>
   );
}
 
export default NewProduct;