"use strict";

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const initialState = {
    recipesList: [],
    isLoading: false,
    searched:'',

}

const recipesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SEARCHED':
            
            return {...state,searched:payload.searched}
        case "LOAD_RECIPES":
            let p = loadRecipes(state.searched)
            console.log(p);
            return {
                recipesList: payload.hits,
                isLoading: true
            }
                
        default:
            return state;
    }
}


export const loadRecipes = () => (state,dispatch) => {
    const RECIPE_APPID = process.env.RECIPE_APPID;
    const RECIPE_APPKey = process.env.RECIPE_APP_KEY;
    // let recipeSearchWord = state.searched
    return axios.get(`https://api.edamam.com/search?q=${state}&app_id=8e56d6c2&app_key=3722a2efb37e9510d5ee892e2eb9676c`)
    .then(res => {
        dispatch({
            type: 'LOAD_RECIPES',
            payload: res.data
        });
        console.log('ffffffffffffffffffff', res)
    });
}
export const searched = (searched) => {
    return {
        type: 'SEARCHED',
        payload: {
            searched,
        }
    };
}

export default recipesReducer;