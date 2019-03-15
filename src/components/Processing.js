import React, { Component } from 'react'

export default class Processing extends Component {
  render() {
    return (
      < div className = {
        `alert alert-light ${this.props.hidden}`
      }
      id = "Processing" >
        Listenning {' '}
        <img alt="loading-gif" src="Eclipse-1s-200px.gif" width="25" />
        {' '} (new upload video has been display about 1 minute)
      </div>
    )
  }
}
