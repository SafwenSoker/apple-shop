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
  }

  public addToCart(id?: string):void {
    this.cartService.add(id);
  }
}
