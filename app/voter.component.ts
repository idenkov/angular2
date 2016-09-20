import {Component, Input, Output} from 'angular2/core';

@Component({
    selector: 'vote',
    templateUrl: 'app/voter.template.html',
    styles: [`
        .vote-wrap {
            width: 20px;
        }
        .vote-wrap i {
            cursor: pointer;
        }
        .highlighted {
            color: orange;
        }
    `]
})

export class VoterComponent{
    @Input () totalVotes = 10;
    @Input () iVote = false;

    upVote(){
        this.iVote = !this.iVote;
        this.totalVotes += this.iVote ? 1 : -1;
    }
    downVote(){
        this.iVote = !this.iVote;
        this.totalVotes += this.iVote ? -1 : 1;
    } 
}