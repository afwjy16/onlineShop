import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUEST } from "../constants/productConstants";

function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
function productDetailReducer(state = { product: {} }, action) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, product: [] };
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export { productListReducer, productDetailReducer };