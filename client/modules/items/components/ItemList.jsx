import React from 'react'
import {Row, Col,Glyphicon} from 'react-bootstrap'

import Item from './Item.jsx'
import ItemProgress from '../../items/components/ItemProgress.jsx'

export default ({content = () => null}) => (
  <Row className='show-grid'>
    <Row>
      <Col xs={12} sm={6}>
        <ItemProgress/>
      </Col>
    </Row>
    <Col xs={12}>
      <a href='/edit'><Glyphicon glyph='plus'/> New Item</a>
    </Col>
    <Item />
  </Row>
)
