import Image from "next/image"
import classes from './productDetail.module.css'
function ProductDetail(props){
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
                <p>{props.description}</p>
                <span>Price:{props.price}</span>
                <button>Add to Cart</button>
            </div>

        </section>
    )
}

export default ProductDetail