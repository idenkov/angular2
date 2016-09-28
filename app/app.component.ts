/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
     constructor(){

         Observable.fromEvent($("#search"), "keyup");

         keyups.subscribe(data => console.log(data));

    //     var debaunce = _.debounce(function(text){
    //               var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
    //         $.getJson(url, function(artists)){
    //             console.log(artists);
    //     }, 400);
    //     $("#search").keyup(function(e)){
    //         var text = else.target.value;

    //         if (text.return < 3)
    //             return;
            
    //          debounced(text);

    //          });
    //     });
    }
}