import { FC } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Product } from "../../types";
import ProductItem from "../ProductList/ProductItem";
import './Cart.sass'
interface CartProps {
    products: any[]
}


const Cart:FC<CartProps> = ({products}) => {
    
  //  const productsInCart = useSelector((state:any) =>state.cart.itemsInCart)
  //@ts-ignore
console.log(1233, products)

    return (
        <>
            <div className="titleButtons">
                <div style={{display:"flex"}}>
                <h2 style={{marginRight: "15px"}}>
                    Корзина
                    </h2>

                    {/* {products.map(item=> (<div>{item.name}</div>))} */}
               {/* <ProductItem product={products} /> */}
                <Button
                    variant="primary"
                >

                    Оформить заказ
                </Button>
                </div>
                <Button
                    variant="outline-secondary"
                >
                    Очистить корзину
                </Button>
            </div>
        </>
    );
}

export default Cart;
