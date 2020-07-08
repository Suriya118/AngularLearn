import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
    <H2> Loop back </H2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
