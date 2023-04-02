import {
    ADD_PRODUCT_LOADING,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_USERS_LOADING,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS,
    DELETE_USERS_LOADING,
    DELETE_USERS_ERROR,
    DELETE_USERS_SUCCESS,
    ADD_ADMIN_LOADING,
    ADD_ADMIN_ERROR,
    ADD_ADMIN_SUCCESS,
    DELETE_ADMIN_LOADING,
    DELETE_ADMIN_ERROR,
    DELETE_ADMIN_SUCCESS,
    PATCH_PRODUCT_LOADING,
    PATCH_PRODUCT_ERROR,
    PATCH_PRODUCT_SUCCESS,
    GET_ADMIN_LOADING,
    GET_ADMIN_ERROR,
    GET_ADMIN_SUCCESS,
    PATCH_ADMIN_LOADING,
    PATCH_ADMIN_SUCCESS,
    PATCH_ADMIN_ERROR
} from "./admin.types";

import { getProduct, delProduct, updateAdmin, delAdmin, delUser, getAdmin, getUsers, addAdmin, updateProduct, postProduct } from "./admin.api"


//Products===============================================================================

//add
export const addProductsLoading = () => ({
    type: ADD_PRODUCT_LOADING
})


export const addProductsError = () => ({
    type: ADD_PRODUCT_ERROR
})


export const addProductsSucess = (payload) => (dispatch) => {
    dispatch(addProductsLoading())
    postProduct(payload).then((res) => { dispatch({ type: ADD_PRODUCT_SUCCESS }); dispatch(getProductSuccess()) }).catch((er) => {

        dispatch(addProductsError())

    })

}



//delete
export const deleteProductLoading = () => ({
    type: DELETE_PRODUCT_LOADING
})

export const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR
})

export const deleteProductSucess = (id) => (dispatch) => {
    dispatch(deleteProductLoading());
    delProduct(id).then((res) => {
        dispatch({ type: DELETE_PRODUCT_SUCCESS })
        dispatch(getProductSuccess())
    }).catch((er) => {
        dispatch(deleteProductError())
    })
}



//get product
export const getProductLoading = () => ({
    type: GET_PRODUCTS_LOADING
})

export const getProductError = () => ({
    type: GET_PRODUCTS_ERROR
})

export const getProductSuccess = (page) => (dispatch) => {
    dispatch(getProductLoading())
    getProduct(page).then((res) => {

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res })
    }).catch((er) => {
        dispatch(getProductError())
    })
}



//update product

export const updateProductLoading = () => ({ type: PATCH_PRODUCT_LOADING });
export const updateProductError = () => ({ tye: PATCH_PRODUCT_ERROR });

export const updateProductSuccess = (id, payload) => (dispatch) => {
    dispatch(updateProductLoading())
    updateProduct(id, payload).then((res) => {
        dispatch({ type: PATCH_PRODUCT_SUCCESS });
        dispatch(getProductSuccess())
    }).catch((er) => {
        dispatch(updateProductError())
    });



}





//users==========================================================

export const getUserLoading = () => ({
    type: GET_USERS_LOADING
})

export const getUsersError = () => ({
    type: GET_USERS_ERROR
})

export const getUserSuccess = (page) => (dispatch) => {
    dispatch(getUserLoading());
    getUsers(page).then((res) => {
        dispatch({ type: GET_USERS_SUCCESS, payload: res })
    }).catch((er) => {
        dispatch({ type: GET_USERS_ERROR })
    })

}

export const delUserLoading = () => ({ type: DELETE_USERS_LOADING });
export const delUserEror = () => ({ type: DELETE_USERS_ERROR });
export const delUserSuccess = (id) => (dispatch) => {
    dispatch(delUserLoading());
    delUser(id).then((res) => {
        dispatch({ type: DELETE_USERS_SUCCESS });
    }).catch((er) => {
        dispatch(delUserEror())
    })
}


//admin================================================================

export const getAdminLoading = () => ({ type: GET_ADMIN_LOADING })
export const getAdminError = () => ({ type: GET_ADMIN_ERROR })

export const getAdminSuccess = (page) => async (dispatch) => {
    dispatch(getAdminLoading());
    // getAdmin().then((res) => {
    //     console.log(res)
    //     dispatch({ type: GET_ADMIN_SUCCESS, payload: res })
    // }).catch((er) => { dispatch(getAdminError()) })
    try {
        let x = await getAdmin(page);
        console.log(x, "xxxx");
        dispatch({ type: GET_ADMIN_SUCCESS, payload: x })
    }
    catch (er) {
        dispatch(getAdminError())
    }
    let x = await getAdmin();
    console.log(x, "hi")
    dispatch({ type: GET_ADMIN_SUCCESS, payload: x })
}



export const addAdminLoading = () => ({ type: ADD_ADMIN_LOADING });
export const addAdminError = () => ({ type: ADD_ADMIN_ERROR });

export const addAdminSuccess = (payload) => (dispatch) => {
    dispatch(addAdminLoading());
    addAdmin(payload).then((res) => {
        dispatch({ type: ADD_ADMIN_SUCCESS, payload })
    }).catch((er) => {
        dispatch(addAdminError())
    })
}

export const delAdminLoading = () => ({ type: DELETE_ADMIN_LOADING });
export const delAdminError = () => ({ type: DELETE_ADMIN_ERROR });

export const delAdminSuccess = (id) => (dispatch) => {
    dispatch(delAdminLoading())
    delAdmin(id).then((res) => {
        dispatch({ type: DELETE_ADMIN_SUCCESS });
    }).catch((er) => { dispatch(delAdminError()) })

}

export const updateAdminSuccess = (id, payload) => (dispatch) => {
    dispatch({ type: PATCH_ADMIN_LOADING })
    updateAdmin(id, payload).then((res) => {
        dispatch({ type: PATCH_ADMIN_SUCCESS })
    }).catch((er) => { dispatch({ type: PATCH_ADMIN_ERROR }) })
}