import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        {{ post.title }}
        <br />
        {{ post.body | summary:25 }}
    `,
    pipes: [SummaryPipe]
})
export class AppComponent {
    post = {
        title: "Angular Tutorial for Beginners",
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada scelerisque tristique. 
            Curabitur mattis dui mi, et dapibus odio mollis quis. Praesent aliquet lectus id gravida suscipit. 
            Fusce volutpat efficitur vulputate. Nunc porttitor aliquam fringilla. Donec quis lectus tristique,
             consectetur mi non, rhoncus dolor. Phasellus elementum mollis finibus.
        `    
    }
}