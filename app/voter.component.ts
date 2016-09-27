import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'vote',
    templateUrl: 'app/voter.template.html',
    styles: [`
        .vote-wrap {
            width: 20px;
            color: #999;
        }
        .vote-wrap i {
            cursor: pointer;
        }
        .voteup, .votedown {
            color: orange;
        }
    `]
})

export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    
    @Output() vote = new EventEmitter();
    
    upVote(){
        if (this.myVote == 1)
            return;
        
        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
    }
    
    downVote(){
        if (this.myVote == -1)
            return;
            
        this.myVote--;
        
        this.vote.emit({ myVote: this.myVote });
    }
}