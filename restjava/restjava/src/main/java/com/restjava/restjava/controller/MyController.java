package com.restjava.restjava.controller;

import org.springframework.web.bind.annotation.RestController;
import com.restjava.restjava.entity.Course;
import com.restjava.restjava.packages.CourseService;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;







@RestController // we tell springboot that this is our controller
@CrossOrigin(origins = "*",allowedHeaders = "*",allowCredentials = "false")
public class MyController {

    @Autowired //creates object of courseserviceimpl class and injects here
    private CourseService courseservice;
    
    @GetMapping("/home")
    public String home(){
        return "Welcome to Courses API";
    }

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return this.courseservice.getCourses();//calls the method of course service interface
    }

    @GetMapping("/courses/{courseId}")
    public Optional<Course> getCourse(@PathVariable String courseId) {
        return this.courseservice.getCourse(Long.parseLong(courseId));
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return this.courseservice.addCourse(course);
    }
    
    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course) {
        return this.courseservice.updateCourse(course);
    }

    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable String courseId){
        try {
            this.courseservice.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<String>("Course deleted successfully",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
