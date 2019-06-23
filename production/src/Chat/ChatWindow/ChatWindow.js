import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'
import PropTypes from 'prop-types'

import UserBubble from '../../Bubble/UserBubble/UserBubble'

export default function ChatWindow(props) {
  const mapState = useCallback(state => state.chat.users)

  return (
    <div className=''>
      <UserBubble userId='meow' />
    </div>
  )
}
