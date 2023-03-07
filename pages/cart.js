import ProductList from '../component/productList';
import { useContext,useState,useEffect } from 'react';
import CartsContext from '../store/product-context'
import classes from './cart.module.css'
import Link from 'next/link';
import CheckOutOrShop from '@/component/checkoutOrShop';
  
function ShopingCart(){
    const cartCtx = useContext(CartsContext)
    const [change, setChange] = useState(false)

    let content;
    if(cartCtx.totalCarts===0){
        content = <p><Link href='/shop'>You got no Products yet. Click Here Start adding some?</Link></p>;
    } else {
      content = <ProductList products={cartCtx.carts}/>
      // console.log(cartCtx.carts)
     
      useEffect(() => {
        setChange(<CheckOutOrShop/>);
      }, []);
    }
    return(
<section className={classes.section}>
    <h1>Items You Shopped</h1>
    {content}
    <div className={classes.change}>
    {change}
    </div>
</section>
    )
}

export default ShopingCart