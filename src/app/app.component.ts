import { Component, AfterViewInit, ElementRef } from '@angular/core';

import axios from 'axios';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {

	constructor(private elementRef:ElementRef) {
		this.CancelToken = axios.CancelToken;
	}

	language = 'de';
	results = [];
	titleFrom = '';
	titleTo = '';
	CancelToken;
	cancelRequest;
	showLoader = false;

	ngAfterViewInit() {
		this.elementRef.nativeElement.querySelector('sbb-footer').addEventListener('sbb-language-selector_language-switch', this.changeLanguage.bind(this));
	}

	changeLanguage(event) {
		this.language = event.detail.language;
		window.scrollTo(0, 0);
	}

	searchCallback(from, to) {
		this.showLoader = true;
		this.cancelRequest && this.cancelRequest();

		axios
			.get(`https://global-warmer.com/sbb/from/${from.id}/to/${to.id}`, {
				cancelToken: this.CancelToken(function executor (c) {
					this.cancelRequest = c;
				}.bind(this))
			})
			.then((res) => {

				if (!res.data && !res.data.trips) {
					this.showLoader = false;
					return;
				}

				this.results = res.data.trips;
				this.titleFrom = from.label;
				this.titleTo = to.label;
				this.showLoader = false;
			})
			.catch((err) => {
				this.showLoader = false;
				console.log('Error requesting Trips: ', err);
			});
	}

}
