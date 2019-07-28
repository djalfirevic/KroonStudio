/* eslint-disable */
import React, { PureComponent } from "react";
import { StyleSheet, Animated, Dimensions, TouchableOpacity } from "react-native";

const getScreenWidth = () => {
  return Dimensions.get('window').width;
};

class FullAvatar extends PureComponent {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount = async () => {
    await setTimeout(() => {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start(() => this.props.showAvatar(null));
    }, 2000)
  };

  renderImage = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { url, showAvatar } = this.props;
    const { container, imageStyle } = styles;
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
      <TouchableOpacity onPress={() => showAvatar(null)} style={container}>
        <Animated.Image
          onLoad={this.renderImage}
          style={[animatedStyle, imageStyle]}
          source={{ uri: url }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'black'
  },
  imageStyle: {
    width: getScreenWidth(), 
    height: 300, 
    backgroundColor: 'black'
  }
});

export default FullAvatar;
