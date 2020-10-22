import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning alert!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: #ee8888;
        border: 2px solid red;
      }
    `
  ]
})
export class WarningAlertComponent {

}
