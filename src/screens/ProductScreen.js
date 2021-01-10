import React, {useEffect} from 'react'
import axios from "axios";
import Rating from './components/Rating';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const ProductScreen = ({match}) => {

    const {product, setProduct} = useState([]);
    useEffect(() =>{
        const fetchProduct = async () =>{
            const {data} = axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [match]);
    return (
        <div>
            product
        </div>
    )
};

export default ProductScreen
