package com.restjava.restjava.packages;

// import java.util.ArrayList;
import java.util.List;
// import java.util.stream.Collectors;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restjava.restjava.dao.CourseDao;
import com.restjava.restjava.entity.Course;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao coursedao;
    // List<Course> list;

    public CourseServiceImpl(){
        // list = new ArrayList<>();
        // list.add(new Course(101,"Java Course","This is beginner to pro Java course"));
        // list.add(new Course(102,"Python Course","This is a Python course"));
    }

    @Override
    public List<Course> getCourses() {
        // return list; //returns this list whenever called
        return coursedao.findAll();
    }

    @Override
    public Optional<Course> getCourse(long courseId) {
        // Course c = null;
        // for (Course course : list) {
        //     if(course.getId()==courseId){
        //         c=course;
        //         break;
        //     }
        // }
        // return c;
        // return coursedao.getReferenceById(courseId)
        return coursedao.findById(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        // list.add(course);
        // return course;
        coursedao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
    //    list.forEach(e->{
    //     if(e.getId()==course.getId()){
    //         e.setTitle(course.getTitle());
    //         e.setDescription(course.getDescription());
    //     }
    //    });
    //    return course;

        coursedao.save(course);//if course is available then update else adds new
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
    //   list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
        Course entity = coursedao.getReferenceById(courseId);
        coursedao.delete(entity);

    }

}
