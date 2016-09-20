import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';
 
@Component({
    selector: 'my-app',
    template: `
        <vote></vote>
    `,
    directives: [VoterComponent]
})

export class AppComponent { 
    vote = {
        totalVotes: 10,
        iVote: false
    }

}
