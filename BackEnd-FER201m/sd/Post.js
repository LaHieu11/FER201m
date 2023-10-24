import { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap'


export default function Post() {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState([]);
    //Quản lý trạng thái dữ liệu của biến posts
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => setPosts(data))

        // fetch tất cả
        fetch("jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => setComments(data))

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json)
            .then(data => setName(data))
    }, [])



    return (
        <Row>
            <Col style={{ marginTop: '20px' }}>
                <Container>
                    <Row>
                        <Col>
                            <h2>Posts: </h2>
                        </Col>
                    </Row>
                    <Row>
                        {
                            posts.map(p => (
                                <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "10px 15px" }} key={p.postId}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Body>
                                            <Card.Title>{p.name + "..."}</Card.Title>
                                            <Card.Text>
                                                {p.body + ' ... '}
                                            </Card.Text>
                                            <Card.Link href={`/posts/${p.id}`}>Detail</Card.Link>
                                            <Card.Link href={`/posts/${p.id}/comments`}> Comment ({comments.filter(c => c.postId == p.id).length})
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }


                    </Row>
                </Container>
            </Col>
        </Row>
    )
}