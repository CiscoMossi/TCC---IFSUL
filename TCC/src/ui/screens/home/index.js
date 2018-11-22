import React, { Component } from 'react'

import { PostService } from '../../../services'
import { Feed } from '../feed'

const postService = new PostService()

export class HomeScreen extends Component {
  state = {
    feed: [],
  }

  getFeed = async () => {
    const { _id } = this.props.loggedUser
    const result = await postService.getFeed(_id)
    this.setState({ feed: result.data.docs })
  }

  render() {
    const { feed } = this.state
    const { loggedUser } = this.props
    
    return (
      <Feed posts={feed} loggedUser={loggedUser} getFeed={this.getFeed} />
    )
  }
}