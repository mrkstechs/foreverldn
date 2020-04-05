import React from 'react';
import { GET_PRODUCT } from '../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Images from './product_components/Images';
import ProductInfo from './product_components/ProductInfo';
import { Link } from 'react-router-dom';

function SingleProduct(props) {
    const {id} = props.match.params;
    const { loading, error, data } = useQuery(GET_PRODUCT, {variables: {id}});
    if(loading) return <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />;
    if(error) return <p>Error :(</p>;
    const {
        name,
        price,
        regular_price,
        sale_price,
        on_sale,
        description,
        stock_quantity,
        sku,
        categories,
        tags,
        images } = data.product;
    return (
        <div className="product">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{name}</BreadcrumbItem>
            </Breadcrumb>
            <Container fluid={true}>
                <Images images={images} />
                <div className="product-info">
                    <ProductInfo name={name} price={price} description={description} sale={on_sale} />
                </div>
            </Container>
        </div>
    )
}

export default SingleProduct
