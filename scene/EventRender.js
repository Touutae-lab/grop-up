import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { render } from 'react-dom';

const Apprender = props => {
    return (
        <View>
            <Text>{props.event}</Text>
            {/* </View><Image */}
            {/* source = {require(this.props.img)} /> */}
            <Text>{props.provider}</Text>
            <Text>{props.time}</Text>
            <Text>{props.detail}</Text>
            <Text>{props.place}</Text>
            <Text>{props.tag}</Text>
        </View>
        );
}

export default Apprender;

// const styles = StyleSheet.create({
//     screen: {
//         width: windowSize.width * 0.8,
//         height: windowSize.height * 0.3
//     }
// });
