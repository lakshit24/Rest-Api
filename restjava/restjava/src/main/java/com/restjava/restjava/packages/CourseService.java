package com.restjava.restjava.packages;

import java.util.List;
import java.util.Optional;

import com.restjava.restjava.entity.Course;

public interface CourseService {


public List<Course> getCourses();//goes to its child for implemantation due to run time polymorphism
public Optional<Course> getCourse(long courseId);//goes to its child for implemantation due to run time polymorphism
public Course addCourse(Course course);//goes to its child for implemantation due to run time polymorphism
public Course updateCourse(Course course);//goes to its child for implemantation due to run time polymorphism
public void deleteCourse(long courseId);//goes to its child for implemantation due to run time polymorphism
}
