import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component  implements OnInit {

  weight!: number;
  height!: number;
  age!: number;
  bmi: number = 0;
  bmr: number = 0;

  private readonly male : string = '1';
  private readonly female : string = '2';

  gender : string = '';
  bmiLevel: string = '';
  alertButtons = ['OK'];

  constructor() { }

  ngOnInit() {}

  selectGender(gender : any){
    this.gender = gender.detail.value;
  }

  bmrCal() {
    if(this.gender == this.male){
      this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
    }else if(this.gender == this.female){
      this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
    }
  }
}
