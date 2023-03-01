import ProductList from '../component/productList';
import { useContext } from 'react';
import CartsContext from '../store/product-context'
function ShopingCart(){
    const cartCtx = useContext(CartsContext)

    let content;
    if(cartCtx.totalCarts===0){
        content = <p>You got no Products yet. Start adding some?</p>;
    } else {
      content = <ProductList products={cartCtx.carts}/>
    }
    return(
<section>
    <h1>Items You Shopped</h1>
    {content}
</section>
    )
}

export default ShopingCart