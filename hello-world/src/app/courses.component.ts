import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.html' ,
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    email="szoitanu98@gmail.com"
    title = "Authors";
    courses = [
        {
            id: 1,
            name: 'course1'
        },
        {
            id: 2,
            name: 'course2'
        },
        {
            id: 3,
            name: 'course3'
        }
    ];
    viewMode = 'list'

    onAdd() {
        this.courses.push({  id: 4,
            name: 'course4'})
    }
    onRemove(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    onChange(course) {
        course.name='UPDATED'
    }

    onKeyUp() {
        console.log(this.email)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}