import React, { Component } from 'react';
import { View, Text } from 'react-native';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> HelloText </Text>
      </View>
    );
  }
}

export default IndexComponent;