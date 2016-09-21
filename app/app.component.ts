import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';
 
@Component({
    selector: 'my-app',
    template: `
        <vote
            [voteCount]="post.voteCount"
            [myVote]="post.myVote"
            (vote)="onVote($event)">
        </vote>
    `,
    directives: [VoterComponent]
})

export class AppComponent { 
    post = {
        voteCount: 10,
        myVote: false
    }

}
