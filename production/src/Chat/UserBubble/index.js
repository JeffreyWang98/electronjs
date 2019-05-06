import React from 'react'
import { Avatar, Badge } from 'antd'
import PropTypes from 'prop-types'

export default function UserBubble(props) {
  return (
    <div>
      <Badge dot offset={[-35, 5]} status={props.s}>
        <Avatar size='large' icon='user' />
      </Badge>
    </div>
  )
}

UserBubble.propTypes = {
  s: PropTypes.string
}
