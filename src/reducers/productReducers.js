import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} 
from './constants/productConstants';

export const productListReducer = (state = {products:[]}, action) =>{

    switch(action.type){
        case "PRODUCT_LIST_REQUEST":
            return {loading:true, products:[]}

        case 'PRODUCT_LIST_SUCCESS':
            return {loading: false, products:action.payLoad};
 
        case 'PRODUCT_LIST_FAIL':
            return {loading: false, error:action.payLoad};
        default:
            return state;
    }

}


export const productDetailsReducer = (state = {product:[]}, action) =>{

    switch(action.type){
        case "PRODUCT_DETAIL_REQUEST":
            return {loading:true, product:[]}

        case 'PRODUCT_DETAIL_SUCCESS':
            return {loading: false, product:action.payLoad};
 
        case 'PRODUCT_DETAIL_FAIL':
            return {loading: false, error:action.payLoad};
        default:
            return state;
    }

}
