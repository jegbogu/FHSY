import { useRouter } from 'next/router';
import classes from './productItem.module.css';
import { useState } from 'react';
import Spinner from '../icons/spinner';
import { useContext } from 'react';
import CartContext from '../store/product-context'





function ProductItem(props){
    const [spinner, setSpinner] = useState(false)
    const [show, setShow] = useState(false)
    const router = useRouter();
    
    function showDetailsHandler() {
       setSpinner(<Spinner/>)
        router.push('/' + props.id);

      }
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
 
<li className={classes.productItem}>

    <div className={classes.item}>
        <div className={classes.figure}>
            <img src={props.image} alt={props.title}/>
        </div>

        <div className={classes.itemBody}>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
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
    : <button className={classes.itemBody} onClick={displayCartBtn}>Add to Cart</button>}
          
           <span><button onClick={showDetailsHandler}>Show Details{spinner}</button></span>
        </div>


    </div>
</li>   
 
    )
}

export default ProductItem