import React, { FC, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from '../../Pages/Cart';
import ControlledCarousel from '../../Pages/ProductList/Carousel';
import { Product, ProductVariants } from '../../types';
interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  products: any[];
}



const ProductModal: FC<ModalProps> = ({ show, setShow, products}) => {
  const handleClose = () => setShow(false);
 // const [variationPropertyValues, setVariationPropertyValues] = useState<VariationPropertyValues[]>([])
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//           //   const result = await axios(
//           //       `${process.env.REACT_APP_BASE_URL}ProductVariationPropertyValues/`
//           //   );
//           //   const options = result.data//.filter((q: { product_variation_id: number; }) => q.product_variation_id === variants.id)
//           //  setVariationPropertyValues(options);
//         } catch (error) { console.log(error) }
//     }
//     fetchData();
// }, []);
console.log(333, products)
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
         
         <Cart products={products}/>
   
        </Modal.Body>
        <Modal.Footer>
          <Button
        //  disabled={!product.variants?.length}
          variant="primary"
          >
            Добавить в корзину
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductModal