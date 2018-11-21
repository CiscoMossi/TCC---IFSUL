import React from 'react'

import { Image } from 'react-native'

import { LOGO } from '../../../../assets/images'

export const DBImage = ({ uri, ...props }) => (
  <Image defaultSource={LOGO} { ...props } source={{ uri }} />
)