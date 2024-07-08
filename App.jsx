import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './components/Course';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col md={3}><LeftMenu /></Col>
          <Col md={9}>
            <Routes>
              <Route path='/home' exact Component={Home} />
              <Route path='/add-courses' exact Component={AddCourse} />
              <Route path='/view-courses' exact Component={AllCourse} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>

  )
}

export default App
