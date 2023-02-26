import classes from './productList.module.css'
import ProductItem from './productItem'

function ProductList(props){
return(
    <ul className={classes.list}>
        {props.products.map((product)=>(
            <ProductItem 
            key={product.id}
            id={product.id}
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