import { useContext,useState,useEffect } from 'react';
import CartsContext from '../store/product-context'
import classes from './checkOut.module.css'

function CheckOut(){
    const cartCtx = useContext(CartsContext)
    const [price, setPrice] = useState(0)
    const cart = cartCtx.carts
    const cartPrice = cart.map((el)=>{
        return Number(el.price)
    }).reduce((acc,cv)=>{
        return acc+cv
    })
     useEffect(()=>{
        setPrice(cartPrice);
     },[]);
  
    return(
        <div className={classes.section}>
            <h3>Your Total Amount is <span>${price}</span></h3>
            <button>Make Payment</button>
        </div>
    )
}

export default CheckOut