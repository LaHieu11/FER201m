import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Dropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();

    const [posts, setPosts] = useState([]);
    const [com, setCom] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => setCom(data));
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));    
    }, [id]);

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().startsWith(searchKey.toLowerCase());
    });

    const filteredUserPosts = selectedUser === null
        ? filteredPosts
        : filteredPosts.filter((post) => post.userId === selectedUser.id);

    return (
        <Row>
            <Col style={{ marginTop: '20px' }}>
                <Container>
                    <Row>
                        <Col>
                            <h2>Posts:</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={3}>
                            <input
                                type="text"
                                style={{ height: '40px' }}
                                placeholder="Enter title to search"
                                value={searchKey}
                                onChange={handleSearchChange}
                            />
                        </Col>
                        <Col md={3}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {selectedUser ? selectedUser.username : 'All Users'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item key="all" onClick={() => handleUserSelect(null)}>
                                        All Users
                                    </Dropdown.Item>
                                    {users.map((user) => (
                                        <Dropdown.Item
                                            key={user.id}
                                            onClick={() => handleUserSelect(user)}
                                        >
                                            {user.username}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={2}>
                            <Link to={'/posts/add'}>Add new account</Link>
                        </Col>
                    </Row>
                    <Row>
                        {filteredUserPosts.map((p) => (
                            <Col xs={12} sm={6} md={4} lg={3} style={{ padding: '10px 15px' }} key={p.id}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title>{p.title.substring(0, 15) + ' ...'}</Card.Title>
                                        <Card.Text>{p.body.substring(0, 40) + ' ...'}</Card.Text>
                                        <Card.Link href={`/posts/${p.id}`}>Detail</Card.Link>
                                        <Card.Link href={`/posts/${p.id}/comment`}>
                                            Comment ({com.filter((c) => c.postId === p.id).length})
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}
