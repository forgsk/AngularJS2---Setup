import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 App..</h1>'
    template: `
                <h2>Courses</h2>
                {{title}}
                <ul>
                    <li *ngFor="#course of courses">
                    {{course }}
                    </li>
                </ul>
              `,
    providers:[CourseService]
})
export class AppComponent {
    title = "Courses List";
    courses = ['Angular', 'ASP.NET Web API', 'C#'];
    constructor(courseService: CourseService) {
        this.courses = courseService.courses;
    }
}
