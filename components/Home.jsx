import React from "react";
import { Container,Button , Row, Col } from "reactstrap";


function Home() {
    return (
        <div style={{ backgroundColor: '#343a40', color: 'white',  padding: '20px 0' ,margin:'5px'}}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col>
              <h2>Hi, Me Lakshit !</h2>
              <p>The Courses App is a comprehensive web application designed to manage and deliver educational courses efficiently. Built with React for the frontend and Spring Boot for the backend API, this app offers a seamless user experience and robust functionality.Please note that this application is intended for demo purposes only.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Home;