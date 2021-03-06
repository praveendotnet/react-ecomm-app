import React, { useEffect } from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispath = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispath(listProducts());
    }, [dispath])

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :
                <Row>

                    {products.map(product => {
                        return (<Col sm={12} md={6} lg={4}>
                            <Product product={product} />
                        </Col>
                        )

                    })}
                </Row>
            }
        </>
    )
}

export default HomeScreen
