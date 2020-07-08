import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup-V1',
  template: `
  <h2>Key up V1</h2>  
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `,
})

export class KeyUpComponent_v1 {
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}

@Component({
  selector: 'app-key-V2',
  template: `
  <h2>Key up V2</h2>  
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'app-key-Enter',
  template: `
  <h2>Key Enter </h2>  
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

@Component({
  selector: 'app-key-V4',
  template: `
  <h2>Key Up V4 </h2>  
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}