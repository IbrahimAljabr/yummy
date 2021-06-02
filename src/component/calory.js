import React from 'react';

import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground } from "react-native";
import { Card, Button } from 'react-native-elements';
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
      visible: true,
    }
  }

  getData = (name) => {

    this.setState({ loaded: false, error: null, data: null });
    let url1 = `https://api.spoonacular.com/recipes/complexSearch?minCalories=${name}&apiKey=62eab48382ff4105bfea78f57ebf1766`;

    superagent.get(url1).then(results => {
      let caloriesDataMeals = results.body.results;
      let caloriesMealsArr = caloriesDataMeals.map(value => {
        return value.id;
      })
      let arr = [];
      let count = 0;
      let mealsArr = caloriesMealsArr.map(value => {
        let mealsUrl = `https://api.spoonacular.com/recipes/${value}/information?apiKey=62eab48382ff4105bfea78f57ebf1766&includeNutrition=false`;
        superagent.get(mealsUrl).then(results => {
          let mealsData = results.body;
          arr.push(mealsData);

          console.log(mealsData);
          count++;
          if (caloriesMealsArr.length === count) {
            this.setState({ visible: false, loaded: true, data: arr });
          }
        })
      })
    })
  }

  render() {
    const display = !this.state.visible ? "none" : "flex";
    const show = !this.state.visible ? "flex" : "none";
    { console.log('00000000000000', this.state.data) }

    return (
      <>
        <ImageBackground style={{ width: width, height: height }} source={require('../assets/bg.jpg')}>
          <View>
            {!this.state.loaded && (
              <Text>LOADING</Text>
            )}
          </View>
          <ScrollView style={{
            flex: 1,
            display: display,
            marginTop: 250
          }}>

            <Button buttonStyle={styles.btn} title="0-500 Cal"
              onPress={() => this.getData('0')} />

            <Button buttonStyle={styles.btn} title="500-1000 Cal"
              onPress={() => this.getData('500')} />

            <Button buttonStyle={styles.btn} title="1000-1500 Cal"
              onPress={() => this.getData('1000')} />

            <Button buttonStyle={styles.btn} title="1500-2000 Cal"
              onPress={() => this.getData('1200')} />
          </ScrollView>
          <ScrollView>
            {this.state.error && (
              <Text style={styles.err}>{this.state.error}</Text>
            )}
            {this.state.data && this.state.data.length > 0 && (
              this.state.data.map(comment => (
                <View style={{
                  width: width - 10,
                  height: 500,
                }}>
                  <Card>
                    <Card.Image source={{ uri: comment.image, }} style={{
                      width: width - 20,
                      height: 300,
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
                      summary : {comment.summary.replace(/<[^>]*>/g, '')}
                    </Text>
                  </Card>
                </View>

              ))
            )}
            <Button title='Back' buttonStyle={{
              display: show,
              zIndex: 100,
              // position: "absolute",
              // bottom:0,
              backgroundColor: "black",
              marginTop: 20,
              opacity: .6,
              marginBottom: 50
            }} onPress={() => {
              this.setState({ visible: true, loaded: true, data: null })
            }} />
          </ScrollView>
        </ImageBackground>

      </>
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
  btn: {
    backgroundColor: "black",
    marginBottom: 20,
    opacity: .6,
    marginRight:50,
    marginLeft:30,
    width:width-100

  }
});