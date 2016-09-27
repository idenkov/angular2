import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'
})
export class SignUpFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                    Validators.required, 
                    UsernameValidators.cannotContainSpace
                    ])],
            password: ['', Validators.required]
        })
    }

    signup(){
        console.log(this.form.value);
    }
}