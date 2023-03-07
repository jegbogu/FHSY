 // require('dotenv').config()
import { MongoClient } from 'mongodb';
import ProductList from '../component/productList'
import Head from 'next/head';
import { Fragment } from 'react';
 
import classes from './shop.module.css'



const Shop = (props) => {
  return ( 
    <Fragment>
      <Head>
      <title>..Household name in online supplies and services.</title>
      </Head>
     
      <h1 className={classes.prod}>Our Products</h1>
      <ProductList products={props.products}/>
     
    </Fragment>
   );
  
}

export  async function getStaticProps(){

  const client =  await MongoClient.connect('mongodb+srv://joseph:joseph123@cluster0.jod1kwf.mongodb.net/products?retryWrites=true&w=majority')

  const db = client.db()

  const productsCollection = db.collection('products')

  const products = await productsCollection.find().toArray()

  client.close()

  return{
    props:{
      products:  products.map((product)=>({
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        id:product._id.toString(),
      })),
    },
    revalidate: 1,
  };
  

}
 
export default Shop;