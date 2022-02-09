import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/course.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/courses';
  // private apiUrl = 'http://my-json-server.typicode.com/houcem-h/public_courses_api/courses';
  
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
  get(id: string){
    return this.http.get(this.apiUrl + '/' + id)
  }
  
  /**
   * Create a new course
   * @param course : new course to create
   */
  create(course: any){
    return this.http.post(this.apiUrl, course);
  }
  
  /**
   * Update course with a given id
   * @param id : course id to update
   * @param course : new course data
   */
  update(id: string, course: any){
    return this.http.put(this.apiUrl + '/'+ id, course);
  }

  /**
   * Delete a course with a given id
   */
  delete(id: string){
    return this.http.delete(this.apiUrl + '/'+ id)
  }
}
