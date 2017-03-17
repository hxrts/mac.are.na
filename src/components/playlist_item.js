import React from 'react'
var he = require('he');

class PlaylistItem extends React.Component {
  render () {
    const item = this.props.item
    const itemClass = "bb pv3 bg-animate"
    const selectedClass = (
      this.props.isSelected ?
      itemClass + ' bg-light-green ' :
      itemClass + ' hover-bg-washed-green'
    )
    return (
      <div style={{ cursor: "pointer" }} className={selectedClass} onClick={() => this.props.onPress(item.id)}>
        <a className="list-item link dim black">
          {he.decode(item.title)}
        </a>
      </div>
    )
  }
}

export default PlaylistItem