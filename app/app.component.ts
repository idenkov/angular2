import {Component} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    directives: [BootstrapPanel],
    template: `
        <bs-panel>
            <div class="heading">The Heading</div>
            <div class="body">This is the body!</div>
            <div class="body">This is another body!</div>
        </bs-panel>
    `,
})
export class AppComponent {
}
ha