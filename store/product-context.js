import { createContext,useState } from "react";

const CartsContext = createContext({
    carts:[],
    totalCarts: 0,
    addCarts:(cartProducts)=>{},
    removeCart:(productId)=>{}
})

export function CartContextProvider(props){
    const[userCarts,setUserCarts] = useState([]);

    function addCartHandler(cartProduct){
        setUserCarts((prevUserCarts)=>{
            return prevUserCarts.concat(cartProduct);
        });
    }
function removeCartHandler(productId){
    setUserCarts(prevUserCarts=>{
        return prevUserCarts.filter(product=>product.id!==productId)
    });

}
const context = {
    carts:userCarts,
    totalCarts: userCarts.length,
    addCarts: addCartHandler,
    removeCart: removeCartHandler,
}
    return(
        <CartsContext.Provider value={context}>
            {props.children}
        </CartsContext.Provider>
    )
}

export default CartsContext;