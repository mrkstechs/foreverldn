import React from 'react';
import { GET_PRODUCTS } from '../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import Product from './Product';
import { Spinner } from 'reactstrap';

function Products() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    if(loading) return <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />;
    if(error) return <p>Error :(</p>;
    return (
        <article id="products">
            {
                data.products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </article>
    )
}

export default Products;
