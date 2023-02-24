import Link from "next/link";
import Cart from "./cart";
import Logo from "./logo";
import Hamburger from "./hamburger";
import classes from './main-navigation.module.css'
 
const MainNavigation = () => {
    return ( 
        <header className={classes.header}>
            <div className={classes.section}>
            <nav className={classes.nav} >
            <div className={classes.alogo}>
                <Link href='/'>
                    <Logo/>
                </Link>
            </div>
             <div className={classes.main}>
                 <main>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        
                    </ul>
                </main>
                </div> 
                <div className={classes.cart}>
                <li><Link href='/cart'><Cart/></Link></li>
                <span>0</span>
                </div>
                 
            </nav>
            <div className={classes.hr}></div>
            </div>
            <div className={classes.mobileNav}>
        <div className={classes.mobileLogo}>
        <Link href='/'>
            <Logo/>
        </Link> 
        </div>
        <div className={classes.mobileCart}>
            <li><Link href='/cart'><Cart/></Link></li>
                <span>0</span>
    </div>
        <div className={classes.hamburger}>
                <Hamburger/>
         <div  className={classes.menu}>
            <main>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <hr/>
                        <li><Link href='/about'>About</Link></li>
                        <hr/>
                        <li><Link href='/contact'>Contact</Link></li>
                        <hr/>
                        <li><Link href='/shop'>Shop</Link></li>
                        <hr/>
                    </ul>
                </main>
                
            </div>
        </div>
    
       
    </div>
        </header>
     );
}
 
export default MainNavigation;