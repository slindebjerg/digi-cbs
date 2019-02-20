// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

// Make a component
class AlbumList extends Component {
  state = { albums: [] };

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} record={album}/>);
  }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state)
    
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

// Export
export default AlbumList;