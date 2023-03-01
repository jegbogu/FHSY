import { useRef,useState } from 'react';
import classes from './productForm.module.css';
import { useRouter } from 'next/router';
import Spinner from '../icons/spinner'

function ProductForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const router = useRouter();
  const [spinner, setSpinner] = useState(false)
  function showDetailsHandler() {
    setSpinner(<Spinner/>)
     router.push('/');

   }


  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      price:  enteredPrice,
      description: enteredDescription,
    };

props.onAddProduct(productData)
 
  }

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Product Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Product Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Product Price</label>
          <input type='number' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Product Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
         <button onClick={showDetailsHandler}> Add Product {spinner}</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
