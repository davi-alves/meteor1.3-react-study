import React from 'react'
import {Col,Panel,Input,ButtonInput,Glyphicon} from 'react-bootstrap'
import DateTimeField from 'react-bootstrap-datetimepicker'

export default ({content}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <a href="/"><Glyphicon glyph="chevron-left"/> Back to Items</a>
      <h1>Edit item</h1>
      <form>
        <Input type='text' placeholder='Name'/>
        <Input type='textarea' placeholder='Description'/>
        <DateTimeField/>
        <ButtonInput bsStyle='primary' type='submit' value='Save'/>
      </form>
    </Panel>
  </Col>
)
