import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="courses.length > 0">
            List of courses. ngIf
        </div>
        <div *ngIf="courses.length == 0">
            You don't have any courses yet. ngIf
        </div>
        <div [hidden]="courses.length == 0">
            List of courses. Binding
        </div>
        <div [hidden]="courses.length > 0">
            You don't have any courses yet. Binding
        </div>
    `
})
export class AppComponent {
  courses = ['course1'];
}