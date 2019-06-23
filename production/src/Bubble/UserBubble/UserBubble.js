import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'
import PropTypes from 'prop-types'

import { Avatar, Badge } from 'antd'

export default function UserBubble(props) {
  const mapState = useCallback(state => state.chat.users)
  const status = useMappedState(mapState)[props.userId].status

  return (
    <Badge dot offset={[-35, 5]} status={status}>
      <Avatar size='large' icon='user' />
    </Badge>
  )
}

UserBubble.propTypes = {
  userId: PropTypes.string.isRequired
}
