import ProductList from "../../component/productList";
import { Fragment } from "react"
import Head from "next/head"
import ProductDetail from "../../component/productDetail"
import { MongoClient, ObjectId } from 'mongodb';
import classes from './index.module.css'

function ProductDetails(props){
    return(
        <Fragment>
            <Head>
            <title>{props.productData.title}</title>
            <meta name='description' content={props.productData.description} />
            <link rel="shortcut icon" href="logo.png" type="image/x-icon"></link>
            </Head>
            <ProductDetail
           title = {props.productData.title}
           image = {props.productData.image}
           description = {props.productData.description}
           price = {props.productData.price}
           id={props.productData.id}
            />
            <h1 className={classes.otherProd}>Products You May be Instrested in</h1>
          <ProductList products={props.products}/>
        </Fragment>
    )
}

export async function getStaticPaths(){
    const client =  await MongoClient.connect('mongodb+srv://joseph:joseph123@cluster0.jod1kwf.mongodb.net/products?retryWrites=true&w=majority')
    
    const db = client.db()

    const productsCollection = db.collection('products')
  
    const products = await productsCollection.find({},{_id:1}).toArray()
  
    client.close()

    return{
        fallback: 'blocking',
        paths: products.map((product)=>({
            params:{productId: product._id.toString()},
        })),
    }


}

export async function getStaticProps(context){
   const productId = context.params.productId 
  
   const client =  await MongoClient.connect('mongodb+srv://joseph:joseph123@cluster0.jod1kwf.mongodb.net/products?retryWrites=true&w=majority');
    
   const db = client.db();

   const productsCollection = db.collection('products');

   const selectedProduct = await productsCollection.findOne({
    _id:new ObjectId(productId),
  });

  const products = await productsCollection.find().toArray()

  client.close();

  return {
    props: {
      productData: {
        id:  selectedProduct._id.toString(),
        title: selectedProduct.title,
        price: selectedProduct.price,
        image: selectedProduct.image,
        description: selectedProduct.description,
      },
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

export default ProductDetails