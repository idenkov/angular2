import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
 
@Component({
    selector: 'my-app',
    template: `
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.like" ></like>
    `,
    directives: [LikeComponent]
})

export class AppComponent { 
    tweet = {
        totalLikes: 10,
        iLike: false
    }

}
