import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Tabs, Tab } from '@material-ui/core';

import { connect } from 'react-redux';
import { loadRecipes,active } from '../store/find.js'
const RecipeViewer = props => {
    useEffect(() => {
        props.loadRecipes();
        props.active()
    }, []);

    return (
        <>
            <View  style={{ marginBottom: '50px' }} container justify="center" spacing={4}>
                {console.log(props)}
                {props.recipes.recipesList.map((product) => {

                    return (
                        <Text title={product.recipe.label} onPress>{product.recipe.label}</Text>

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
    active
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeViewer);