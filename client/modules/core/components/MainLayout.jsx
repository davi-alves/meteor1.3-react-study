import React from 'react'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'

export default ({content}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageHeader>Impossible List</PageHeader>
      </Col>
    </Row>
    {content()}
  </Grid>
)

