"use strict";

import axios from 'axios';

const initialState = {
    recipesList: [],
    isLoading: false,

}

const recipesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOAD_RECIPES":
            return {
                recipesList: payload.hits,
                isLoading: true
            }
            case 'ACTIVE':
                
                return {...state,state}
        default:
            return state;
    }
}


export const loadRecipes = () => (dispatch, recipeSearchWord) => {
    const RECIPE_APPID = process.env.RECIPE_APPID;
    const RECIPE_APPKey = process.env.RECIPE_APP_KEY;
    return axios.get(`https://api.edamam.com/search?q=egg&app_id=8e56d6c2&app_key=3722a2efb37e9510d5ee892e2eb9676c`)
    .then(res => {
        dispatch({
            type: 'LOAD_PRODUCTS',
            payload: res.data
        });
        console.log('ffffffffffffffffffff', res)
    });
}
export const active = () => {
    return {
        type: 'ACTIVE',
        payload: {
            
        }
    };
}

export default recipesReducer;