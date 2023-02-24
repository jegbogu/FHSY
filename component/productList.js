import classes from './productList.module.css'
import ProductItem from './productItem'

function ProductList(props){
return(
    <ul className={classes.list}>
        {props.products.map((product)=>(
            <ProductItem 
            key={product.key}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            
            />
        ))}
    </ul>
)
}

export default ProductList