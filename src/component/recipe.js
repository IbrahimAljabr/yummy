import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
}
  from "react-native";

import { Card, Button } from 'react-native-elements';
const { width, height } = Dimensions.get("window");

export default class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null,
      search: '',
      visible: true
    }
  }

  getData = (name) => {

    this.setState({ loaded: false, error: null, data: null });
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
    this.setState({ visible: false, loaded: true, data: data.hits });
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
    const display = !this.state.visible ? "none" : "flex";
    const show = !this.state.visible ? "flex" : "none";

    return (
      <>
        <View>
          {!this.state.loaded && (
            <Text>LOADING</Text>
          )}</View>
        <ScrollView style={{
          // flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          display: display
        }}>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('chicken')
              }}>
              <Image style={styles.image} source={require('../assets/checken-wings.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Chicken</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('noodle')
              }}>
              <Image style={styles.image} source={require('../assets/noodle-shop.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Noodle</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('burger')
              }}>
              <Image style={styles.image} source={require('../assets/honey-mustard-chicken-burger.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Burger</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('fries')
              }}>
              <Image style={styles.image} source={require('../assets/fries-restaurant.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Fries</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('hotdog')
              }}>
              <Image style={styles.image} source={require('../assets/hot-dog-restaurant.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Hotdog</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('salad')
              }}>
              <Image style={styles.image} source={require('../assets/salad.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Salad</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('japanese')
              }}>
              <Image style={styles.image} source={require('../assets/japanese-restaurant.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Japanese</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('pasta')
              }}>
              <Image style={styles.image} source={require('../assets/tomato-pasta.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Pasta</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('sushi')
              }}>
              <Image style={styles.image} source={require('../assets/sushi.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Sushi</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('drink')
              }}>
              <Image style={styles.image} source={require('../assets/teh-c-peng.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Drink</Text>
            </View>
          </View>
          <View style={styles.cardView}>
            <TouchableHighlight style={styles.image}
              onPress={() => {
                this.getData('ice cream')
              }}>
              <Image style={styles.image} source={require('../assets/ice-kacang.jpg')} />
            </TouchableHighlight>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>Ice Cream</Text>
            </View>
          </View>
        </ScrollView>

        <ScrollView >
          {this.state.error && (
            <Text style={styles.err}>{this.state.error}</Text>
          )}
          {this.state.data && this.state.data.length > 0 && (
            this.state.data.map(comment => (
              <View style={{
                width: width - 10,
                height: 640,
              }}>
                <Card>
                  <Card.Image source={{ uri: comment.recipe.image, }} style={{
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
          <Button title='Back' buttonStyle={{
            display: show,
            zIndex: 100,
            // position:'absolute',
            // top:100,
            marginTop: 20,
            backgroundColor: "black",
            opacity: .6,
            color:"white",
          }} onPress={() => {
            this.setState({ visible: true, loaded: true, data: null })
          }} />
        </ScrollView>
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
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // display:display,
    // justifyContent: 'center',
  },
  // containerStyle: {
  //   padding: 10,
  //   backgroundColor: 'white',
  //   borderWidth: 0,
  //   marginBottom: 10,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   borderColor: '#808080',
  //   marginTop: 50,
  //   elevation: 10
  // }
  cardView: {
    // flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',

    width: width - 20,
    height: height / 5,
    backgroundColor: "white",
    margin: 10,
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: "absolute",
    bottom: 1,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 5,
    borderRadius: 10,
    opacity: 1
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
    // position: 'absolute',
    // top: 100,
  },
});
