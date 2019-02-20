import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.record.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.record.artist}</Text>
      </CardSection>
      <CardSection>
        <Image 
          source={{uri: props.record.image}}
          style={{ width:300, height: 300 }}
          />
      </CardSection>
    </Card>
  )
}

export default AlbumDetail;