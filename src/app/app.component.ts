import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-angular-paneles';
  
  filterForm = this.formBuilder.group({
    filter:  ''
  })
  
  constructor (private formBuilder: FormBuilder){}



  
}
