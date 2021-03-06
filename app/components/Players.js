import React from 'react';
import { Player } from './Player';

export default class Players extends React.Component {
  render() {
    if (this.props.list.length === 0) {
      return <div>Sign in to see the list of players available.</div>
    }

    return (
      <div className="list-group">
        { this.props.list.map((player) => {
          return ( <div className={ "list-group-item noselect " + this.props.active(player.uid) } key={ player.uid } onClick={ () => this.props.onSelect(player.uid) }>
              <Player image={ player.image } name={ player.name} />
          </div> )
        }) }
      </div>
    )
  }
}