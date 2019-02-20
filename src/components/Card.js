import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 3,
    shadowColor: '#f2f2f2',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Card;