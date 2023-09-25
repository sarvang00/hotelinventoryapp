import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello Inline</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'admin';
}
