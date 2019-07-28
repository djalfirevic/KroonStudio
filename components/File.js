/* eslint-disable */
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const File = ({ text }) => {
  const { textStyle } = styles;

  return(
    <Text style={textStyle}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16
  }
});

export default File;
