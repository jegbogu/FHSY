import classes from './footer.module.css'
import Logo from './logo';
import Link from 'next/link';
import FacebookIcon from '../../icons/facebook';
import InstagramIcon from '../../icons/instagram';
import EmailIcon from '../../icons/email';
import WhatsappIcon from '../../icons/whatsapp';
 
  
 

const Footer = () => {
    return ( 
        <div className={classes.section}>
        <div className={classes.footer}>
            <div className={classes.menu}>
                     <ul>
                        <li><Link href='/'>Home</Link></li>
                         
                        <li><Link href='/about'>About</Link></li>
                        
                        <li><Link href='/contact'>Contact</Link></li>

                        <li><Link href='/shop'>Shop</Link></li>
                      
                        <li><Link href='/blog'>Blog</Link></li>
                       
                        <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                       
                        <li><Link href='/terms-and-condition'>Terms & Condition</Link></li>
                       
                    </ul>
                 
            </div>
            <div className={classes.icons}>
                <p className={classes.rof}>Reach Out & Folow Us:</p>
         <span><FacebookIcon/></span> 
         <span> <InstagramIcon/></span> 
         <span><EmailIcon/></span> 
         <span><WhatsappIcon/> </span> 
         
          
          
            </div>
            <div className={classes.logo}>
            <Logo/>
            </div>
        </div>
        <p className={classes.copy}>Copyright @Abiom International Supplies</p>
        </div>
     );
}
 
export default Footer;