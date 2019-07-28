/* eslint-disable */
import React, { PureComponent } from "react";
import { StyleSheet, Animated } from "react-native";

class Avatar extends PureComponent {
  state = {
    opacity: new Animated.Value(0)
  };

  renderImage = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { url } = this.props;
    const { imageStyle } = styles;
    const animatedStyle = {
      opacity: this.state.opacity,
      transform: [
        {
          scale: this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0.1, 1]
          })
        }
      ]
    };

    return (
      <Animated.Image
        onLoad={this.renderImage}
        style={[imageStyle, animatedStyle]}
        source={{ uri: url }}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 30
  }
});

export default Avatar;
