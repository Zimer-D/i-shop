import { useEffect, useMemo, useState } from "react";
import axios from 'axios'
import ProductItem from "./ProductItem";
import './ProductList.sass'
import { Row } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import { Products, ProductVariants } from "../../types";


const ProductList = (props: Products) => {

    return (
        <Row className="justify-content-md-center">
            {
                props.products.map(item => (
                    <ProductItem
                        key={item.id}
                        product={item}
                    />
                ))
            }
        </Row>
    );
}

export default ProductList;

