import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'

import { Avatar, Badge } from 'antd'

export default function UserBubble() {
  const mapState = useCallback(state => state)
  const { testVar } = useMappedState(mapState)
  return (
    <div>
      <Badge dot offset={[-35, 5]} status={testVar}>
        <Avatar size='large' icon='user' />
      </Badge>
    </div>
  )
}
