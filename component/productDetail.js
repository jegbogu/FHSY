import { useState } from 'react'
 
import classes from './productDetail.module.css'
 
import { useContext } from 'react';
import CartContext from '../store/product-context'



function ProductDetail(props){
    const[show, setShow] = useState()
     
function displayCartBtn(){
setShow(!show)
}
const[count,setCount] = useState(0)
const cartCtx = useContext(CartContext)

function addHandler(){
    setCount(count+1)
    cartCtx.addCarts({
        id:props.id,
        title:props.title,
        description: props.description,
        image: props.image,
        price: props.price,
    })
}
function subtractHandler(){
    if(count==0){
        setCount(0)
       
    }else{
        setCount(count-1)
        cartCtx.removeCart(props.id)
    }
}
 

    return(
        <section className={classes.section} >
            <div className={classes.figure}>
            <img
        src={props.image}
        alt={props.title}
      />
            </div>
            <div className={classes.details}>
                <h1>{props.title}</h1>

                <div className={classes.para}>
                    <p>{props.description}</p>
                </div>
                <span>Price:${props.price}</span>
                <div className={classes.btn}>
                {show?
          ( <div className={classes.cartBtn}>
        <div className={classes.cartBtnOne}>
        <button onClick={addHandler}>+</button></div>
        <div className={classes.cartBtnTwo}>
        <button>{count}</button>
        </div>
        <div className={classes.cartBtnThree}>
        <button onClick={subtractHandler}>-</button>
    </div>
        
    </div>)
    : <button onClick={displayCartBtn}>Add to Cart</button>}
                </div>
                
            </div>

        </section>
    )
}

export default ProductDetail