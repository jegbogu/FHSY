import classes from './productItem.module.css'

function ProductItem(props){
    return(
 
<li className={classes.productItem}>

    <div className={classes.item}>
        <div className={classes.figure}>
            <img src={props.image} alt={props.title}/>
        </div>

        <div className={classes.itemBody}>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
           <span> <button>Product Details</button></span>
        </div>


    </div>
</li>   
 
    )
}

export default ProductItem