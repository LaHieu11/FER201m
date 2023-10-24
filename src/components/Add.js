import { Col, Row, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react';

export default function Add() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreate = () => {
        // Lấy giá trị của các trường và lưu vào một đối tượng
        const comment = {
            id,
            name,
            title,
            body,
        };

        // Chuyển đối tượng thành chuỗi JSON và lưu vào localStorage
        localStorage.setItem('comment', JSON.stringify(comment));

        // Xóa giá trị trong các trường sau khi đã lưu vào localStorage
        setId('');
        setName('');
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h1>Create new Comment</h1>
            <Form>
                <Row>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Id"
                            required
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter Body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Button
                        variant="primary"
                        type="button"
                        style={{ margin: '3px', width: 'auto' }}
                        onClick={handleCreate}
                    >
                        Create
                    </Button>
                </Row>
            </Form>
        </div>
    );
}
