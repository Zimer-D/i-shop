import { FC, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios'
import ImgCarousel from './Carousel';
import './ProductList.sass'
import { Form } from 'react-bootstrap';
import ProductModal from '../../components/Modal/Modal';
import Loader from '../../components/Loader/Loader';
import { Image, Product, ProductVariants } from '../../types';
import { useDispatch } from 'react-redux';
import { setItemsInCart } from '../../redux/Cart/reducer';
interface ProductItemProps {
    product: Product,
}



const ProductItem: FC<ProductItemProps> = ( product ) => {
   // const [variants, setVariants] = useState<ProductVariants[]>([]);

    const [selectedVariant, setSelectedVariant] = useState<any>(!!product.product.variants?product.product.variants[0].id:'');
 const dispatch = useDispatch();
 const handleClick = () =>{
dispatch(setItemsInCart({...product.product, selectedVariant}))
 }
//  {...[product.product], selectedVariant}
// const addSelectedVariant=()=>{
// //@ts-ignore
//    product.product = [product.product].push(selectedVariant)
// }
useEffect(()=>{
    
    console.log(555, product.product)
},[selectedVariant])

    return (
        <>
            <Card style={{ width: '18rem', margin: "20px", padding: '5px' }} >

                <ImgCarousel 
                images={product.product.images} />
                    <Card.Body>
                        <Card.Title className='cardTitle'
                        >
                            {product.product.name}
                        </Card.Title>
                        <Card.Text
                            className='cardText'
                        >
                            {product.product.description}

                        </Card.Text>

                        {!product.product.variants?.length ?
                            <p style={{ color: 'red' }}>Нет в наличии</p>
                            :
                            <Form.Select style={{ marginBottom: "10px" }}
                            value={selectedVariant}
                            onChange={(e)=>setSelectedVariant(e.target.value)}
                            >
                                {product.product.variants?.sort((a, b) => (a.price - b.price)).map(v => (
                                    <option  value={v.id} key={v.id}>{v.price}</option>
                                    
                                ))}
                            </Form.Select>
                        }
                        <Button
                            variant="primary"
                            disabled={!product.product.variants?.length}
                            onClick={handleClick}
                        >
                            Добавить в корзину
                        </Button>
                    </Card.Body>
            </Card>
        </>
    );
}

export default ProductItem;