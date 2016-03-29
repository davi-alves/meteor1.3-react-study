import React from 'react'
import {ProgressBar} from 'react-bootstrap'

export default ({content}) => (
  <ProgressBar now={70} label='%(percent)s%' />
)
