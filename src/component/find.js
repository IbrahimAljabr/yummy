import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
} from "react-native";


const { width, height } = Dimensions.get("window");
const title = "Find Recipes";

const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <TouchableHighlight
                style={styles.image}
                onPress={() => {
                    // navigation.navigate('Recipe')
                    //   alert("You tapped the button!");


                }}
            >
                <Image
                    style={styles.image}
                    source={
                       require('../assets/cheese.jpg')}
                />
            </TouchableHighlight>

            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{title} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 5,
        backgroundColor: "white",
        margin: 10,
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
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 5,
        borderRadius: 10,
    },
    itemTitle: {
        color: "white",
        fontSize: 22,
        shadowColor: "#000",
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        // marginBottom: -50,
        fontWeight: "bold",
        elevation: 5,
        position: 'absolute',
        top: 100,
    },
    itemDescription: {
        color: "white",
        fontSize: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default CarouselItem;
