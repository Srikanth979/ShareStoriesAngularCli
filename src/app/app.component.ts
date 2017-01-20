import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = '';
  public radioModel: string = 'Left';
  public isCollapsed:boolean = false;
  public collapse:boolean = false;
  public openSignUpBlock:boolean = false;

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

}
