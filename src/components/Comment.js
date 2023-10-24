import { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
export default function Comment() {

    const { id } = useParams()
    const [com, setCom] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(data => setCom(data))
    }, [id])
    return (
        <Row>
            <Col style={{ marginTop: '20px' }}>
                <Container>
                    <Row>
                        <Col><h2>Comment - postId: {id}</h2></Col>
                      
                    </Row>
                    <Row>
                        {
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {com.map(c => (
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>{c.email}</td>
                                            <td>{c.body}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}