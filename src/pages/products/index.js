import React, {useEffect, useState} from 'react';
import Layout from '@/components/common/layouts/layout';
import {useProducts} from "@/context/Products/productsContext";
import ProductItem from "@/components/products/ProductItem";

const Products = props => {
    const [data, setData] = useState(false);
    const [products, dispatch] = useProducts()

    useEffect(() => {
        dispatch({type: "GET_PRODUCTS"})
    }, []);

    useEffect(() => {
        setData(products)
    }, [products]);

    return (
        <Layout>
            <div className="container">
                {data.isLoading ? <p> Loading ...</p> : (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">

                        {data.data && data.data.map((others) => (
                            <ProductItem key={others.id} {...others} />
                        ))}

                    </div>
                )}
            </div>
        </Layout>
    )
};

export default Products;
