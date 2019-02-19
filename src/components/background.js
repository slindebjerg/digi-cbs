// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const Background = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}/>
  )
}

// Make the component available to other parts of the app
export default Background;

// Styling
const styles = {
  viewStyle: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexDirection: 'column'
  }
}