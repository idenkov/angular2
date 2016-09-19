import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
 
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent, AuthorComponent]
})

export class AppComponent { }
