import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
    {
        products{
            id
            name
            slug
            price
            regular_price
            sale_price
            on_sale
            status
            images{
                id
                src
                alt
            }
        }
    }
`;

const GET_PRODUCT = gql`
    query($id: ID){
        product(id: $id){
            id
            name
            slug
            on_sale
            price
            regular_price
            sale_price
            description
            short_description
            sku
            status
            stock_status
            stock_quantity
            categories{
                id
                name
                slug
                count
                image
                products{
                    id
                    name
                    slug
                    price
                }
            }
            images{
                id
                src
                alt
            }
            tags{
                id
                name
                slug
            }
        }
    }
`;

export {
    GET_PRODUCTS,
    GET_PRODUCT
}