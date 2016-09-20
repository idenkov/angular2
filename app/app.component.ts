import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
 
@Component({
    selector: 'my-app',
    template: `
        <input type="text" [value]="title" (input)="title = $event.target.value" />
        <input type="text" [(ngModel)]="title" />

        <input type="button" (click)="title = 'Ha'" value="Clear" />
        Preview: {{ title }}
        <favorite></favorite>
    `,
    directives: [CoursesComponent, FavoriteComponent]
})

export class AppComponent { 
    title = "Angular App";
}
