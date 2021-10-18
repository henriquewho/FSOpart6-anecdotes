import { useSelector } from 'react-redux'
import React from 'react'

const Notification = () => {
  const notification = useSelector(state => {
    return state.message
  })

  const display = notification ? '' : 'none';

  const style = {
    border: 'solid',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    display
  }

  return (
    <div style={style} className='notification'>
      Message: {notification}
    </div>
  )
}

export default Notification