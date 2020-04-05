import React from 'react';
import { Jumbotron, Badge } from 'reactstrap';

function ProductInfo({name, price, description, sale}) {
    let removeTags = description.replace(/(<([^>]+)>)/ig,"");
    return (
        <>
            <Jumbotron>
                {
                    sale ? <h2><Badge color="danger">Sale</Badge>{name}</h2> : <h2>{name}</h2>
                }
                <h4>£{price}</h4>
                <hr/>
                <p>{removeTags}</p>
            </Jumbotron>
        </>
    )
}

export default ProductInfo;
