import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: boolean = false;
  titleBtn : string = "iniciar sesión";

  constructor() {}

  onSubmit(){
    
  }

}
