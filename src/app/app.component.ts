import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  date = '1970-03-10T00:00:00.000Z';

  changeDate() {
    const date = new Date();
    this.date = date.toString();
  }
}
