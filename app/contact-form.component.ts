import {Component} from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.template.html' 
})
export class ContactFormComponent {
    onSubmit(form){
        console.log(form);
    }    
}