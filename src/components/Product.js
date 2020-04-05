import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Product({
    product: { id, name, slug, price, regular_price, sale_price, on_sale, status, images }
}) {
    const onSale = product => {
        if (product !== false) {
            return <div className="price-wrapper">
                <p>
                    <span className="reg-price">{ regular_price }</span>
                    <span className="sale-price">{ sale_price }</span>
                </p>
            </div>;
        } else {
            return <p className="price">{ price }</p>;
        }
    }
    return (
        <Card className="product">
            <Link to={`/products/${id}/${slug}`}>
                <CardImg src={images[0].src} />
                <CardBody>
                    <CardTitle>
                        <p>{name}</p>
                        {
                            onSale(on_sale)
                        }
                    </CardTitle>
                </CardBody>
            </Link>
            <Button className="add-to-cart">Add To Cart</Button>
        </Card>
    )
}

export default Product;