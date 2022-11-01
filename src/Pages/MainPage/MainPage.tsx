import { useState, useEffect } from "react";
import axios from 'axios'
//import ProductList, { Product } from "../ProductList";
import Categories from "../Categories";
import Loader from "../../components/Loader/Loader";
import { Product, Image, ProductVariants, ProductVariationPropertyValues } from "../../types";
import ProductList from "../ProductList";
import { useProductContext } from "../../context";





const MainPage = ({ searchTerm }: any) => {
    const [selectedCategoryID, setCategoryFilter] = useState<Number | undefined>(undefined);
    const [selectedSort, setSelectedSort] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<Product[]>([]);
    console.log(!searchTerm)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `${process.env.REACT_APP_BASE_URL}`;
                let params = {} as any;
                if (!!searchTerm) {
                    url += 'Products';
                    params.filter = `{"name":"${searchTerm}"}`;
                }
                else if (selectedSort === 'nameASC') {
                    url += 'Products';
                    params.sort = '["name","ASC"]';
                }
                else if (selectedSort === 'nameDESC') {
                    url += 'Products';
                    params.sort = '["name","DESC"]';
                }
                else if (selectedSort === 'priceASC') {
                    url += 'ProductVariations';
                    params.sort = '["price","ASC"]';
                }
                else if (selectedSort === 'priceDSC') {
                    url += 'ProductVariations';
                    params.sort = '["price","DESC"]';
                }

                else if (selectedCategoryID) {
                    url += 'Products';
                    params.filter = `{"category_id":${selectedCategoryID}}`;
                } else {
                    url += 'Products'
                }

                const result = await axios.get(url, {
                    params: { ...params }
                })
                const res = result.data as Product[];
                if (res.length) {

                    let finishedProductID = 0;
                    let productIDsToGetImages = res.filter(q => q.id > finishedProductID).map(q => q.id)
                    while (true) {
                        const imgRes = await
                            axios.get(`${process.env.REACT_APP_BASE_URL}ProductImages?sort=["product_id","ASC"]&filter={"product_id":[${productIDsToGetImages.join(",")}]}`)

                        const imgArr = imgRes.data as Image[];
                        if (imgArr.length < 50) break;//happy we got all 
                        else if (imgArr.length === 0) break;//happy we got nothing 
                        else {
                            //additonalcase when there aremore then 50 images in one element
                            finishedProductID = secondBiggest(imgArr.filter(q => q.product_id > finishedProductID).map(q => q.product_id));
                            productIDsToGetImages = res.filter(q => q.id > finishedProductID).map(q => q.id)
                            if (productIDsToGetImages.length === 0) {
                                break;
                            }

                        }
                        for (let i = 0; i < imgArr.length; i++) {
                            if (!imgArr[i]) { console.log("Ошибка") }
                            const product = res.find(q => q.id === imgArr[i]!.product_id)
                            if (!product!.images) {
                                product!.images = [];
                            }
                            const duplicates = product!.images.find(q => q.id !== imgArr[i].product_id)
                            if (!duplicates) {
                                product!.images!.push(imgArr[i])
                            }

                        }

                    }

                    let finishedProductIDforVar = 0;
                    let productIDsToGetVariations = res.filter(q => q.id > finishedProductIDforVar).map(q => q.id)
                    while (true) {
                        const varRes = await
                            axios.get(`${process.env.REACT_APP_BASE_URL}ProductVariations?sort=["product_id","ASC"]&filter={"product_id":[${productIDsToGetVariations.join(",")}]}`)
                        const varArr = varRes.data as ProductVariants[];
                        if (varArr.length < 50) break;
                        else if (varArr.length === 0) break;
                        else {
                            finishedProductIDforVar = secondBiggest(varArr.filter(q => q.product_id > finishedProductIDforVar).map(q => q.product_id));
                            productIDsToGetVariations = res.filter(q => q.id > finishedProductIDforVar).map(q => q.id)
                            if (productIDsToGetVariations.length === 0) {
                                break
                            }
                        }
                        for (let i = 0; i < varArr.length; i++) {
                            if (!varArr[i]) { console.log("ошибка") }
                            const product = res.find(q => q.id === varArr[i]!.product_id)
                            if (!product!.variants) {
                                product!.variants = [];
                            }
                            const duplicates = product!.variants.find(q => q.id !== varArr[i].product_id)
                            if (!duplicates) {
                                product!.variants!.push(varArr[i])
                            }
                        }
                    }
                }

                setLoading(false)
                setItems(res);
            } catch (error) { console.log(error) }
        }
        // loading && fetchData();
        fetchData();
    }, [selectedCategoryID, selectedSort, loading]);
    const secondBiggest = (arr: Array<number>) => {
        let max = -Infinity, result = -Infinity;
        for (let index = 0; index < arr.length; index++) {
            const nr = arr[index];

            if (nr > max) {
                [result, max] = [max, nr] // save previous max
            } else if (nr < max && nr > result) {
                result = nr; // new second biggest
            }
        }

        return result;
    }

    return (
        <>
            <Categories
                chooseFilter={setCategoryFilter}
                chooseSort={setSelectedSort} />

            {loading && <Loader />}
            <ProductList
                products={items}
            />
        </>
    );
}

export default MainPage;