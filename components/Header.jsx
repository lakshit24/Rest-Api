import React from "react";
import { Container, Row, Col } from "reactstrap";


function Header() {
    return (
        <div style={{ backgroundColor: '#83B4FF', color: 'white',  padding: '20px 0' ,margin:'5px'}}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>Course Edu</h1>
              <p>Unlock your potential with our diverse range of online courses. Learn from industry experts at your own pace.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Header;