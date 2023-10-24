import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Comment from './components/Comment';
import Post from './components/Post';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
              <Col>
                <Routes>
                  <Route path='/' element={<Post/>} />
                  <Route path='/posts' element={<Post/>} />
                  <Route path='/posts/:id/comments' element={<Comment/>} />
                  <Route path='/posts/:id' element={<PostDetails/>} />
                  
                </Routes>
              </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;