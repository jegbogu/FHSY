// require('dotenv').config()
import { MongoClient } from 'mongodb'

 async function handler(req,res){
  if(req.method==='POST') {
    const data = req.body;
    console.log(data)
    const client = await MongoClient.connect('mongodb+srv://joseph:joseph123@cluster0.jod1kwf.mongodb.net/products?retryWrites=true&w=majority');

    const db = client.db();
    console.log('connected to DB')
    const productscollection = db.collection('products');

  const result = await productscollection.insertOne(data);

  console.log(result);

   client.close()
res.status(201).json({message:'data inserted'})
}
 }

 export default handler