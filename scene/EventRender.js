import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
;

const windowSize = Dimensions.get('window')
const Apprender = props => {
    return (
        <View style = {styles.seperate}>
            <View style = {styles.screen}>
                <Text style={styles.headerText}>{props.event}</Text>
            {/* </View><Image */}
            {/* source = {require(this.props.img)} /> */}
                <Text>{props.provider}</Text>
                <Text>{props.time}</Text>
                <Text>{props.detail}</Text>
                <Text>{props.place}</Text>
                <Text>{props.tag}</Text>
            </View>
        </View>
        );
}

export default Apprender;

const styles = StyleSheet.create({
    screen: {
        alignContent: 'center',
        width: windowSize.width * 0.9,
        height: windowSize.height * 0.45,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        borderRadius: 20,
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    tagContainer: {
        flexDirection: 'row',
        
    },
    seperate: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingTop: 20,
        paddingLeft: 20,
    },
});
