import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FontAwesomeModule
  ]
})
export class CoursesModule { }
