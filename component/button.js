import { Fragment } from 'react';
import classes from './button.module.css'

const Button = () => {
    return ( 
    <Fragment>
        <div className={classes.bannerButton}>
                <button>Shop Now</button>
           </div>     
        </Fragment>      
     );
}
 
export default Button;