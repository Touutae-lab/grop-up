import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { render } from 'react-dom';

export class Apprender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.event}</Text>
        {/* </View><Image */}
        {/* source = {require(this.props.img)} /> */}
        <Text>{this.props.provider}</Text>
        <Text>{this.props.time}</Text>
        <Text>{this.props.detail}</Text>
        <Text>{this.props.place}</Text>
        <Text>{this.props.tag}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   screen: {
//     width: windowSize.width * 0.8,
//     height: windowSize.height * 0.3
//   }
// });
