/* eslint-disable */
import React from "react";
import { View, StyleSheet } from "react-native";
import File from "./File";
import Avatar from "./Avatar";

const Gist = ({ url, text }) => {
  const { container, textStyle } = styles;

  return (
    <View style={container}>
      <Avatar url={url} />
      <View style={textStyle}>
        <File text={text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  textStyle: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Gist;
