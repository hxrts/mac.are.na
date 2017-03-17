import React from 'react'
<<<<<<< HEAD
=======
import { find, findIndex } from 'lodash'
>>>>>>> Attempt to play next track
import { apiBase } from '../config'
import { onlySongs } from '../lib/filter'
import Header from '../components/header'
import PlaylistDisplay from '../components/playlist_display'
import PlaylistPlayer from '../components/playlist_player'
import PlaylistItem from '../components/playlist_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      playlistID: null,
      selectedID: null
    }
  }
  componentDidMount() {
    const component = this
    const playlistID = this.props.params.playlistID 
    
    this.setState({ playlistID })

    fetch(`${apiBase}/channels/${playlistID}/contents`)
      .then(function(response) {
        return response.json();
      }).then(function(response) {
        const items = onlySongs(response.contents);
        component.setState({ items });
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      })
  }

  playNext() {
    const selectedItemIndex = findIndex(this.state.items, (item) => {
      return item.id === this.state.selectedID
    })
    const newItemIndex = (
      selectedItemIndex + 1 > this.state.items.length ? 
      0 :
      selectedItemIndex + 1 
    )
    const newItem = this.state.items[newItemIndex]
    this.setState({
      selectedItem: newItem
    })
  }

  render () {
    let items = []
    for (var i=0; i < this.state.items.length; i++) {
      items.push(
        <PlaylistItem
          key={this.state.items[i].id} 
          item={this.state.items[i]}
          isSelected={this.state.items[i].id === this.state.selectedID}
          onTrackEnd={this.playNext}
          onPress={(id) => {
            this.setState({ selectedID: id }) 
          }}
        />
      );
    }

    const selectedItem = find(this.state.items, (item) => {
      return item.id === this.state.selectedID
    })
    
    return (
      <div className='w-100 min-vh-100 pa3 pa5-ns'>
        <Header />
        <PlaylistDisplay item={selectedItem} />
        <PlaylistPlayer item={selectedItem} />
        {items}
      </div>
    )
  }
}

export default Playlist