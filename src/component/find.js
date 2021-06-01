import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadRecipes, searched } from '../store/find.js'
const RecipeViewer = props => {
    useEffect(() => {
        // props.loadRecipes(props.recipes.searched)
    }, [ props.recipes.searched]);
    
    let updateSearch = (search) => {
        props.searched(search)                
    };
    return (
        <>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
            // value={updateSearch}
            />
            <View style={{ marginBottom: '50px' }} container justify="center" spacing={4}>
                {console.log(props)}
                {props.recipes.recipesList.map((product) => {

                    return (
                        <>
                            <Text title={product.recipe.label}>{product.recipe.label}</Text>



                        </>
                    )

                })}
            </View>
        </>
    );
}

const mapStateToProps = state => {
    return { recipes: state.recipes }
}

const mapDispatchToProps = {
    loadRecipes,
    searched
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeViewer);