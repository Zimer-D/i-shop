export interface Product {
    id: number,
    name: string,
    category_id: number,
    description: string,
    images?: Image[],
    variants?: ProductVariants[],
    PVPV?:ProductVariationPropertyValues,
    selectedVariant?: number
}
export interface Filters {
    selectedCategoryID: Number | undefined,
    selectedSort: string | undefined,
}

export interface Products {
    products: Product[],
}

export interface Image {
    id: number,
    image_name: string,
    image_url: string,
    product_id: number,
}

export interface ProductVariants {
    id: number,
    product_id: number,
    price: number,
    stock: number
}

export interface ProductVariationPropertyValues {
        id: number,
        product_variation_id: number,
        product_variation_property_id: number,
        value_string: string,
        value_int: null,
        value_float: null,
        product_variation_property_list_value_id: null
}