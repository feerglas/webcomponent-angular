import { Component, OnInit, Input } from '@angular/core';
import 'time-elements';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html'
})

export class DatetimeComponent implements OnInit {
  @Input() date: String;

  ngOnInit() { }
}
