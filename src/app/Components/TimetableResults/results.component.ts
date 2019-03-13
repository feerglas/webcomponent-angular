import { Component, Input } from '@angular/core';

@Component({
	selector: 'timetable-results',
	templateUrl: './results.component.html'
})

export class ResultsComponent {
	@Input() results: [];
}
