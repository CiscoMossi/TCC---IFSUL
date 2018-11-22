import React from 'react'

import { Feed } from '../feed'

export const HomeScreen = ({ feed, loggedUser, refreshFeed }) => (
  <Feed posts={feed} loggedUser={loggedUser} getFeed={refreshFeed} />
)