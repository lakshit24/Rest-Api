import React, { useState } from "react";
import { Form,FormGroup,Input,Label,Button, Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/MyApi";
import { toast } from "react-toastify";

function AddCourse() {

  const [course,setCourse] = useState({});
   
  const handleForm = (e) =>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  }

  //to post on server
  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then((response)=>{
      toast.success("Course added")
      console.log(response);
      setCourse({id:"",title:"",description:""});
    },(error)=>{
      toast.error("Something went wrong")
      console.log(error);
    })
  }

    return(
    <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="id">Course ID</Label>
          <Input id="id" name="id" placeholder="Enter new course ID to add or existing ID to update"type="number" onChange={(e)=>{
            setCourse({...course,id:e.target.value})
          }} />
        </FormGroup>

        <FormGroup>
          <Label for="name">Course Name</Label>
          <Input id="name" name="name" placeholder="Enter Course Name"type="text" onChange={(e)=>{
            setCourse({...course,title:e.target.value})
          }}/>
        </FormGroup>

        <FormGroup>
          <Label for="Description">Course Description</Label>
          <Input id="Description" name="Description" placeholder="Enter Course Description" type="textarea" onChange={(e)=>{
            setCourse({...course,description:e.target.value})
          }}/>
        </FormGroup>

        <Container className="text-center">
        <Button type="submit" color="success">Submit</Button>
        <Button color="warning" onClick={()=>{setCourse({id:"",title:"",description:""});}} type="reset" style={{"margin-left":"6px"}}> Clear</Button>
        </Container>
        
      </Form>
    )
}

export default AddCourse;