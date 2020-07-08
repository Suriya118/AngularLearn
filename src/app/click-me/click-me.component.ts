import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
  <button (click)="onClickMe()">Click me!</button>
  {{clickMessage}}`
})
export class ClickMeComponent implements OnInit {

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
