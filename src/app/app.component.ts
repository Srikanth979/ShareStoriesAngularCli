import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpGlobalService } from "./global/services/http-global.service";
import { ISignUpForm, ILoginForm } from "./global/interfaces/appComponentInterfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [HttpGlobalService]
})
export class AppComponent {
  name = '';
  public radioModel: string = 'Left';
  public isCollapsed:boolean = false;
  public collapse:boolean = false;
  public openSignUpBlock:boolean = false;
  public loginForm: ILoginForm = {
    email: '',
    password: ''
  };
  public signUpForm: ISignUpForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public successMessage: any;
  public errorMessage: any;

  constructor(private httpGlobalService: HttpGlobalService){}


  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  public nullCheck(element):boolean {
    if(element !== undefined || element !== null){
      return true;
    }else {
      return false;
    }
  }

  public navBarSignUpClick(event: any):void {
    this.openSignUpBlock = true;
  }

  public navBarLoginClick(event: any):void {
    this.openSignUpBlock = false;
  }

  public signIn(event: any):void {
    this.httpGlobalService.signIn(this.loginForm)
                     .subscribe(
                       data  => this.successMessage = true,
                       error =>  this.errorMessage = <any>error);
    ;
  /*  if (this.loginForm !== undefined) {
      this.HttpGlobalService.signIn(this.loginForm)
                       .subscribe(
                         data  => this.successMessage = true,
                         error =>  this.errorMessage = <any>error);
     } */
   }

}
