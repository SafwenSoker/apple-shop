import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: ':id', component: CourseDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [
    CourseDetailsComponent
  ]
})
export class CoursesRoutingModule { }
