import React from 'react';

import { StyleSheet, Text, View, ScrollView,Dimensions } from "react-native";
import {  Card, Button } from 'react-native-elements';
const { width, height } = Dimensions.get("window");

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
    let url = `https://api.edamam.com/search?q=${name}&app_id=8e56d6c2&app_key=3722a2efb37e9510d5ee892e2eb9676c`;

    let req = new Request(url, {
      method: 'GET'
    });

    fetch(req)
      .then(response => response.json())
      .then(this.showData)
      .catch(this.badStuff)
  }


  showData = (data) => {
    this.setState({ loaded: true, data: data.hits });
    console.log('.....................', data);
  }
  badStuff = (err) => {
    this.setState({ loaded: true, error: err.message });
  }
  componentDidMount() {
    //this.getData();
    //geolocation -> fetch
  }
  render() {
    { console.log('000000000000', this.state.data) }

    return (
      <ScrollView >
        { !this.state.loaded && (
          <Text>LOADING</Text>
        )}
        <Button title="chicken" 
          onPress={() => this.getData('chicken')} />

        <Button title="noodle"
          onPress={() => this.getData('noodle')} />

        <Button title="burger"
          onPress={() => this.getData('burger')} />

        <Button title="fries"
          onPress={() => this.getData('fries')} />

        <Button title="hotdog"
          onPress={() => this.getData('hotdog')} />

        <Button title="salad"
          onPress={() => this.getData('salad')} />

        <Button title="japanese"
          onPress={() => this.getData('japanese')} />

        <Button title="drink"
          onPress={() => this.getData('drink')} />

        <Button title="pasta"
          onPress={() => this.getData('pasta')} />

        <Button title="sushi"
          onPress={() => this.getData('sushi')} />

        <Button title="ice cream"
          onPress={() => this.getData('ice cream')} />

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
                <Card.Image source={{ uri: comment.recipe.image, }} style={{
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
                <Card.Title key={comment.recipe.label}>{comment.recipe.label}</Card.Title>
                <Card.Divider />
                <Text numberOfLines={5} key={comment.recipe.label} style={{ marginBottom: 10 }}>
                  ingredientLines : {comment.recipe.ingredientLines} 
                </Text>
                <Text key={comment.recipe.label} style={{ marginBottom: 10 }}>
                  calories : {comment.recipe.calories.toFixed(2)} 
                  </Text>

                  <Text key={comment.recipe.label} style={{ marginBottom: 10 }}>

              fat : {comment.recipe.totalNutrients.FAT.quantity.toFixed(2)} 
              </Text>

              <Text key={comment.recipe.label} style={{ marginBottom: 10 }}>
              Carbs : {comment.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} 
              </Text>
              <Text key={comment.recipe.label} style={{ marginBottom: 10 }}>
              Protein : {comment.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} 
              </Text>

              <Text key={comment.recipe.label} style={{ marginBottom: 10 }}>
              Cholesterol :{comment.recipe.totalNutrients.CHOLE.quantity.toFixed(2)} 
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