 import classes from './checkoutOrShop.module.css'
 import Link from 'next/link'

function CheckOutOrShop(){
    return(
        <div className={classes.bannerButton}>
            <button><Link href='./checkOut'>Check Out</Link></button>
            <button><Link href='/shop'>Shop More</Link></button>
            
        </div>
    )
}

export default CheckOutOrShop