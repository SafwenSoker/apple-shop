import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/courses-list';
import { Course } from 'src/app/course.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: Course[] = courses;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  public addToCart(id?: string):void {
    this.cartService.add(id);
  }
}
