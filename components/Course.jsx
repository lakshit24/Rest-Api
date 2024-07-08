import axios from "axios";
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Container, Button } from "reactstrap";
import base_url from "../api/MyApi";
import { toast } from "react-toastify";

function Course({course,update}) {
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then((response)=>{
      toast.success("Deleted Successfully");
      update(id);
    },(error)=>{
      toast.error("Cant delete");
    })
  }

    return (
        <Card className="my-2" color="dark" outline >
        <CardBody className="d-flex flex-column justify-content-center align-items-center text-center">
          <CardTitle tag="h5">
            {course.title}
          </CardTitle>
          <CardText>
            {course.description}
          </CardText>
          <Container className="text-center">
                <Button onClick={()=>{deleteCourse(course.id)}} color="primary" className="mx-1">
                  Delete
                </Button>
                <Button color="primary" className="mx-1">
                  Update
                </Button>
              </Container>
        </CardBody>
      </Card>
    )
}
export default Course;