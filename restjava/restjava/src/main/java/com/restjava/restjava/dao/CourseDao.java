package com.restjava.restjava.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restjava.restjava.entity.Course;

public interface CourseDao extends JpaRepository<Course,Long>//we tell function kispe perform honge and primary key ka type
{

}
