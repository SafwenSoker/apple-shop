import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/course.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/courses';
  
  /**
   * Get all courses
   * @returns Observable<Course[]> 
   */
  all(){
    return this.http.get(this.apiUrl);
  }

  /**
   * Get a course with the given id
   * @param id : course id
   * @returns Observable<Course> 
   */
  get(id: string){}
  
  /**
   * Create a new course
   * @param course : new course to create
   */
  create(course: any){}
  
  /**
   * Update course with a given id
   * @param id : course id to update
   * @param course : new course data
   */
  update(id: string, course: any){}

  /**
   * Delete a course with a given id
   */
  delete(id: string){}
}
