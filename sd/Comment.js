import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function Comment() {

    const { postId, id, name, email, body } = useParams()

    return (
        <Row>
            <Col style={{ textAlign: 'center', lineHeight: '30px' }}>
                <Container>
                    <Row>
                        <Col>
                            <h2>đẹp trai số {id} thế giới</h2>
                        </Col>
                        <Row>
                            <Col>
                                {postId}
                            </Col>
                            
                        </Row>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}