import BannerProduct from "./banner/bannerProduct"
import classes from './singleProductCard.module.css'

function SingleProductCard(){
return(
    <div className={classes.section}>
        <div className={classes.figure}>
            <BannerProduct/>
        </div>
        <div className={classes.article}>
            <h2>Health Benefits Of Eating Ogbonor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quae quisquam veritatis maiores, commodi harum recusandae consequatur, voluptates facere accusamus reprehenderit optio consectetur perspiciatis reiciendis minima hic ut quaerat. Dolor architecto magni, autem aut culpa minima commodi, tempora tenetur, earum beatae nihil provident error debitis! Repellendus sapiente iste esse quaerat vitae, dolore libero. Nesciunt, perferendis culpa.<br/><br/> Ut dolorum accusamus quaerat deserunt consequatur dolores magnam consectetur, incidunt quis qui asperiores odit quod veniam hic animi eaque a atque aliquam at? Voluptates explicabo ipsa nostrum aspernatur. Eius dolorum explicabo nesciunt expedita fugit. Porro quaerat quidem ipsa? Laboriosam ex cumque provident? Quo, voluptates......</p>
            <button>Read More</button>
        </div>
    </div>
)
}

export default SingleProductCard