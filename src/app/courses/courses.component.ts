import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/courses-list';
import { Course } from 'src/app/course.model';
import { LocalStorageService } from 'src/app/services/local-storage.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: Course[] = courses;

  public cartContent: any[]= [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.cartContent = this.localStorageService.get('cart');
  }

  public addToCart(id: String):void {
    this.cartContent.filter(elem => elem.id === id)[0] ? this.cartContent.filter(elem => elem.id === id)[0].quantity++ : this.cartContent.push({id: id, quatity: 1});
    this.localStorageService.set('cart', this.cartContent);
  }
}
