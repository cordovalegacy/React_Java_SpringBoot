package com.spring_boot.react_integration.service;
import com.spring_boot.react_integration.model.Student;
import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
