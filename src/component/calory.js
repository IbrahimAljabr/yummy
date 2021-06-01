import React from 'react';

import { StyleSheet, Text, View, ScrollView,Dimensions } from "react-native";
import {  Card, Button } from 'react-native-elements';
const { width, height } = Dimensions.get("window");
import superagent from 'superagent';


export default class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null,
      search: '',
    }
  }

  getData = (name) => {
        
    this.setState({ loaded: false, error: null , data: null });
    let url1 = `https://api.spoonacular.com/recipes/complexSearch?maxCalories=1000&apiKey=da9f21fbecf94d709f3d22cf84e8d3f6`;
    
    superagent.get(url1).then (results => {
      let caloriesDataMeals = results.body.results;
      let caloriesMealsArr = caloriesDataMeals.map(value =>{
          return value.id;
      })
      let arr =[];
      let count = 0;
      let mealsArr = caloriesMealsArr.map(value =>{
        let mealsUrl = `https://api.spoonacular.com/recipes/${value}/information?apiKey=da9f21fbecf94d709f3d22cf84e8d3f6&includeNutrition=false`;
        superagent.get(mealsUrl).then(results => {
          let mealsData = results.body;
               arr.push(mealsData);
              
              console.log(mealsData);
              count++;
              if(caloriesMealsArr.length === count){
                this.setState({ loaded: true, data: arr});
        }
      })
      })
  })
  }

  render() {
    { console.log('00000000000000', this.state.data) }

    return (
      <ScrollView >
        { !this.state.loaded && (
          <Text>LOADING</Text>
        )}
        <Button title="500" 
          onPress={() => this.getData('500')} />

        <Button title="1000"
          onPress={() => this.getData('1000')} />

        <Button title="1500"
          onPress={() => this.getData('1500')} />

        <Button title="2000"
          onPress={() => this.getData('2000')} />

        { this.state.error && (
          <Text style={styles.err}>{this.state.error}</Text>
        )}
        { this.state.data && this.state.data.length > 0 && (
          this.state.data.map(comment => (
            <View style={{
              width: width - 10,
              height: 600,
            }}>
              <Card>
                <Card.Image source={{ uri: comment.image, }} style={{
                  width: width - 20,
                  height:  300,
                  //Below lines will help to set the border radius
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  overflow: 'hidden',
                }}>
                </Card.Image>
                <Card.Divider />
                <Card.Title key={comment.title}>{comment.title}</Card.Title>
                <Card.Divider />
                <Text numberOfLines={5} key={comment.title} style={{ marginBottom: 10 }}>
                summary : {comment.summary} 
                </Text>
              </Card>
            </View>

          ))
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 24,
    color: '#333'
  },
  err: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});