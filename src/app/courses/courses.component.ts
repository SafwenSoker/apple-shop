import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course.model';
import { CourseService } from 'src/app/services/course.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: any = [];

  constructor(private cartService: CartService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.all().subscribe(
      res => this.coursesList = res
    );
    // let course: Course = {
    //   id: '8f4aa769-7841-424c-a817',
    //   title: 'Introduction to Computer Science',
    //   description:
    //     'This course introduces students to the basic concepts of computer science. It covers the basic programming concepts, data structures, and algorithms, and introduces students to the software development process. Students will learn to use a programming language, and to write algorithms in a programming language. This course is a prerequisite for the CS program.',
    //   image:
    //   'https://scontent.ftun16-1.fna.fbcdn.net/v/t1.18169-9/26167375_1635106093214957_5060003631117229952_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ED2j9blggBMAX-7gLra&_nc_ht=scontent.ftun16-1.fna&oh=45a4f5642ba5fdc7aa81001e55aa173f&oe=61C4BDD7',
    //   last_update: '10/2020',
    //   instructor: 'Samuel Spencer',
    //   language: 'English',
    //   price: 39.99,
    //   goals: [
    //     'Understand how computers work from inside out',
    //     'Understand basic concepts of software programming (in Java, Python, PHP)',
    //     'Fundamentals of databases, mobile apps and cloud computing',
    //     'Write basic software programs and applications',
    //   ],
    //   requirements: [
    //     'No technical prerequisites for this course.',
    //     "I assume that you have used a computer and/or smartphones before, but I don't expect you to have any other technical knowledge.",
    //   ],
    // };
    
    // this.courseService.create(course).subscribe(
    //   res => console.log(res)
    // );
  }

  public addToCart(id?: string):void {
    this.cartService.add(id);
  }
}
