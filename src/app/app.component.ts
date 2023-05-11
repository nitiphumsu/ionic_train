import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  chagePage(page : string){
    if(page == 'bmi'){
      this.router.navigate(['/page1']);
    }else if(page == 'bmr'){
      this.router.navigate(['/page2']);
    }else if(page == 'about'){
      this.router.navigate(['/page3']);
    }
  }
  // gotoBmiPage(){
  //   this.router.navigate(['/page1']);
  // }
  // gotoBmrPage(){
  //   this.router.navigate(['/page2']);
  // }
  // gotoAboutMePage(){
  //   this.router.navigate(['/page3']);
  // }


}
