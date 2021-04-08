import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import { appColors } from './../ColorTemplate.js';

export class InputBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.inputBox}>{this.props.children}</View>
    );
  }
}

export class InputTextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={[styles.inputTextBox,
          (this.props.longText ? {minHeight: 200,}: {})]}
        multiline={this.props.longText ? true: false}
        placeholder={this.props.children}
        placeholderTextColor={appColors.borderColor}
        onChangeText={val => this.props.onChangeText(val)} />
    );
  }
};

export class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.label}>{this.props.children}</Text>
    );
  }
};


const styles = StyleSheet.create({
  inputBox: {
    marginVertical: 10,
    backgroundColor: appColors.backgroundColor,
  },
  inputTextBox: {
    textAlignVertical: 'top',
    textAlign: 'left',
    fontSize: 18,
    padding: 13,
    marginTop: 10,
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: appColors.borderColor,
  },
  label: {
    fontSize: 18,
    textAlign: 'left',
  },
});
