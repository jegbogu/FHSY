import { useState } from 'react'
import DisplayCartBtn from './displayCartBtn'
import classes from './productDetail.module.css'
function ProductDetail(props){
    const[show, setShow] = useState()
function displayCartBtn(){
setShow(!show)
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
                {show?<DisplayCartBtn/>: <button className={classes.itemBody} onClick={displayCartBtn}>Add to Cart</button>}
                </div>
                
            </div>

        </section>
    )
}

export default ProductDetail