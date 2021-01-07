import React, { Component } from 'react'

import {Container, Row, Col} from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Demand Cart
                    </Col>
                </Row>
            </Container>

           
        )
    }
}
